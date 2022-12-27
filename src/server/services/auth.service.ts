import { LoginUser, loginUserSchema, RegisterUser, registerUserSchema } from '../schemas/auth.schema';
import { prisma } from '../db/client';
import { hash, verify } from '../utils/password';
import { sendVerificationEmail } from './verification.service';

/**
 * Logs in a user or throws
 *
 * @param {LoginUser} user credientials
 * @returns {Promise<LoginUser | null>} user
 */
export const loginUser = async ({ email, password }: LoginUser) => {
  try {
    loginUserSchema.parse({ email, password });

    const user = await prisma.credentialsAuth.findFirst({
      where: { email },
    });
    if (!user) throw new Error('User not found');

    const result = await verify(password, user.password);
    if (!result) throw new Error('Bad password');

    if (!user.emailVerified) {
      throw new Error('Email not verified');
    }

    return { id: user.id, email: user.email };
  } catch (error) {
    console.log('error', error);
    if (error instanceof Error && error.message === 'Email not verified') {
      throw error;
    }
    throw new Error('Invalid Login');
  }
};

/**
 * Registers a new user
 *
 * @param {RegisterUser} user credientials
 * @returns {Promise<{ success: true } | null>}
 */
export const registerUser = async ({ email, password }: RegisterUser) => {
  try {
    registerUserSchema.parse({ email, password });

    const existingEmail = await prisma.credentialsAuth.findFirst({ where: { email } });

    if (existingEmail) throw new Error('Email Exists');
    // TODO vaidat password with schema

    let hashedPassword: string;

    try {
      hashedPassword = await hash(password);
    } catch (error) {
      throw new Error('Password Error');
    }

    const user = await prisma.credentialsAuth.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    await sendVerificationEmail(user);

    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error('Unable to create user');
  }
};
