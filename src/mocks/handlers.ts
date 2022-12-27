// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = {
  signIn: rest.post<{ email: string }>('/api/auth/callback/credentials*', async (req, res, ctx) => {
    // node-fetch sends as URLSeachParams but msw doesn't accept very well
    // so we need to convert it to a string then parse it
    const x = await req.text();
    const params = new URLSearchParams(x);
    if (params.get('email') === 'valid@email.com') {
      return res(ctx.status(200), ctx.json({ url: 'http://localhost:3000/' }));
    }

    return res(ctx.status(401), ctx.json({ url: 'http://localhost:3000/api/auth/error?error=Invalid%20Login' }));
  }),
  session: rest.get('/api/auth/session', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
  providers: rest.get('/api/auth/providers', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        credentials: {
          id: 'credentials',
          name: 'Credentials',
          type: 'credentials',
          signinUrl: 'http://localhost:3000/api/auth/signin/credentials',
          callbackUrl: 'http://localhost:3000/api/auth/callback/credentials',
        },
      }),
    );
  }),
  csrf: rest.get('/api/auth/csrf', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ csrfToken: 'csrfToken' }));
  }),
  authLog: rest.post('/api/auth/_log', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
};
