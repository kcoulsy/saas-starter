import { CredentialsAuth, VerificationToken } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import confirmRegistration from '@src/server/email/templates/confirmRegistration.hbs';
import { env } from '@src/env/server.mjs';
import { prisma } from '../db/client';
import { sendEmail } from './email.service';

export const findExistingVerificationTokenForUser = async (user: CredentialsAuth) => {
  return prisma.verificationToken.findFirst({
    where: {
      userId: user.id,
    },
  });
};

export const generateVerificationTokenForUser = async (user: CredentialsAuth): Promise<VerificationToken> => {
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
      userId: user.id,
      expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
      token: uuidv4(),
    },
  });
};

export const verifyToken = async (token: string): Promise<CredentialsAuth | null> => {
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

  const user = await prisma.credentialsAuth.findFirst({
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

  await prisma.verificationToken.delete({
    where: {
      token,
    },
  });

  await prisma.credentialsAuth.update({
    where: {
      id: user.id,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  return user;
};

export const sendVerificationEmail = async (user: CredentialsAuth) => {
  if (user.emailVerified) {
    throw new Error('Email already verified');
  }
  const { token } = await generateVerificationTokenForUser(user);
  const tokenLink = `${env.NEXTAUTH_URL}/verify?token=${token}&email=${user.email}`;
  const html = confirmRegistration({ tokenLink });
  await sendEmail({
    email: user.email,
    subject: 'Confirm your email',
    text: `Please confirm your account by visiting the link ${tokenLink}`,
    html,
  });
};

export const resendVerificationEmail = async (email: string) => {
  const user = await prisma.credentialsAuth.findFirst({
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
