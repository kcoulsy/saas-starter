import { CredentialsAuth, VerificationToken } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../db/client';

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
