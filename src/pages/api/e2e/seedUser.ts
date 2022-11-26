import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { registerUser } from '../../../server/services/auth.service';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
}).post(async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(404).end('Page is not found');
    return;
  }

  const seedCredentials = {
    email: faker.internet.email('e2e', Date.now().toString().slice(-8)),
    password: faker.internet.password(),
  };

  try {
    await registerUser(seedCredentials);
  } catch (err) {
    console.log(err);
    throw new Error('Unable to seed user');
  }
  res.json({ seedCredentials });
});

export default handler;
