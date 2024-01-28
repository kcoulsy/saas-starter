import { User, VerificationToken } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { render } from '@react-email/render';
import ConfirmEmail from '@emails/confirm-email';
import L from '@src/i18n/i18n-node';
import { env } from '@src/env/server.mjs';
import { pageRoutes } from '@src/constants/routes';
import { prisma } from '../db/client';
import { sendEmail } from './email.service';

export const findExistingVerificationTokenForUser = async (user: User) => {
  return prisma.verificationToken.findFirst({
    where: {
      userId: user.id,
    },
  });
};

export const generateVerificationTokenForUser = async (user: User): Promise<VerificationToken> => {
  const existingToken = await findExistingVerificationTokenForUser(user);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        token: existingToken.token,
      },
    });

    return generateVerificationTokenForUser(user);
  }

  return prisma.verificationToken.create({
    data: {
      identifier: 'email',
      userId: user.id,
      expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
      token: uuidv4(),
    },
  });
};

export const verifyToken = async (token: string): Promise<User | null> => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: {
      token,
    },
  });

  if (!verificationToken) {
    throw new Error('Token not found');
  }

  const now = new Date();
  const expires = new Date(verificationToken.expires);

  if (expires < now) {
    throw new Error('Token expired');
  }

  if (!verificationToken.userId) {
    throw new Error('Token error');
  }

  const user = await prisma.user.findFirst({
    where: {
      id: verificationToken.userId,
    },
  });

  if (!user) {
    await prisma.verificationToken.delete({
      where: {
        token,
      },
    });

    throw new Error('User not found for token');
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  await prisma.verificationToken.delete({
    where: {
      token,
    },
  });

  return user;
};

export const sendVerificationEmail = async (user: User) => {
  if (user.emailVerified) {
    throw new Error('Email already verified');
  }
  const { token } = await generateVerificationTokenForUser(user);
  const tokenLink = `${env.NEXTAUTH_URL}${pageRoutes.verify(token)}`;

  const html = render(<ConfirmEmail tokenLink={tokenLink} />);
  const locale = 'en';

  await sendEmail({
    email: user.email,
    subject: L[locale].emails.confirmEmail.subject(),
    text: L[locale].emails.confirmEmail.text(''),
    html,
  });
};

export const resendVerificationEmail = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  try {
    await sendVerificationEmail(user);
  } catch (error) {
    throw new Error('Error sending email');
  }
};
