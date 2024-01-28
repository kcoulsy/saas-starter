'use server';

import jwt from 'jsonwebtoken';
import { render } from '@react-email/render';
import { env } from '@src/env/server.mjs';
import { pageRoutes } from '@src/constants/routes';
import ForgotPasswordEmail from '@emails/forgot-password';
import L from '@src/i18n/i18n-node';
import passwordSchema from '@src/schemas/passwordSchema';
import { LoginUser, loginUserSchema, RegisterUser, registerUserSchema } from '../schemas/auth.schema';
import { prisma } from '../db/client';
import { hash, verify } from '../utils/password';

import { sendVerificationEmail } from './verification.service';
import { sendEmail } from './email.service';

/**
 * Logs in a user or throws
 *
 * @param {LoginUser} user credientials
 * @returns {Promise<LoginUser | null>} user
 */
export const loginUser = async ({ email, password }: LoginUser) => {
  try {
    loginUserSchema.parse({ email, password });

    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (!user) throw new Error('User not found');

    const result = await verify(password, user.password);
    if (!result) throw new Error('Bad password');

    if (!user.emailVerified) {
      throw new Error('Email not verified');
    }
    console.log('logging in', { id: user.id, email: user.email });

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

    const existingEmail = await prisma.user.findFirst({ where: { email } });

    if (existingEmail) throw new Error('Email Exists');
    // TODO vaidat password with schema

    let hashedPassword: string;

    try {
      hashedPassword = await hash(password);
    } catch (error) {
      throw new Error('Password Error');
    }

    const user = await prisma.user.create({
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

/**
 * Forgot password
 * @param {string} email
 * @returns {Promise<{ success: true } | null>}
 * @throws {Error} if email not found
 */
export const forgotPassword = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) throw new Error('Email not found');

    const token = jwt.sign({ email, id: '123' }, 'env.FORGOT_PASSWORD_JWT_SECRET', {
      expiresIn: '5m',
    });

    const tokenLink = `${env.NEXTAUTH_URL}${pageRoutes.verify(token)}`;

    const html = render(<ForgotPasswordEmail token={token} />);
    const locale = 'en';

    await sendEmail({
      email: user.email,
      subject: L[locale].emails.forgotPassword.subject(),
      text: L[locale].emails.forgotPassword.text(tokenLink),
      html,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error('Unable to send email');
  }
};

interface ChangePassword {
  userId: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export async function changePassword({ userId, currentPassword, newPassword, confirmNewPassword }: ChangePassword) {
  const user = await prisma.user.findFirst({ where: { id: userId } });

  if (!user) throw new Error('User not found');

  const result = await verify(currentPassword, user.password);
  if (!result) throw new Error('Password is incorrect');

  if (newPassword !== confirmNewPassword) throw new Error('Passwords do not match');

  const locale = 'en';
  let parsedPassword = '';
  try {
    parsedPassword = passwordSchema(L[locale]).parse(newPassword);
  } catch (error) {
    throw new Error('Unable to change password');
  }

  let hashedPassword: string;

  try {
    hashedPassword = await hash(parsedPassword);
  } catch (error) {
    throw new Error('Unable to change password');
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      password: hashedPassword,
    },
  });

  return { success: true };
}
