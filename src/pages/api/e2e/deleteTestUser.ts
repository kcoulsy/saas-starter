import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@src/server/db/client';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
}).delete(async (req, res) => {
  if (process.env.VERCEL_ENV === 'production') {
    res.status(404).end('Page is not found');
    return;
  }

  try {
    const { email } = req.body;

    const user = await prisma.credentialsAuth.findFirst({
      where: { email },
    });

    if (!user) {
      res.status(404).end('User not found');
      return;
    }

    const result = await prisma.credentialsAuth.delete({
      where: { id: user.id },
    });

    if (!result) {
      res.status(500).end('Something broke!');
      return;
    }

    res.status(200).end('User deleted');
  } catch (error) {
    res.status(500).end('Something broke!');
  }
});

export default handler;
