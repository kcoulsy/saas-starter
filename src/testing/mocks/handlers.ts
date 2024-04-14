// src/mocks/handlers.js
import { HttpResponse, http } from 'msw';

export const handlers = {
  signIn: http.post<{ email: string }>('/api/auth/callback/credentials', async ({ request }) => {
    // node-fetch sends as URLSeachParams but msw doesn't accept very well
    // so we need to convert it to a string then parse it
    const url = await request.text();
    const params = new URLSearchParams(url);

    if (params.get('email') === 'valid@email.com') {
      return HttpResponse.json({ url: 'http://localhost:3000/' });
    }

    if (params.get('email') === 'unverfied@email.com') {
      return HttpResponse.json(
        { url: 'http://localhost:3000/api/auth/error?error=Email%20not%20verified' },
        { status: 401 },
      );
    }

    return HttpResponse.json({ url: 'http://localhost:3000/api/auth/error?error=Invalid%20Login' }, { status: 401 });
  }),
  session: http.get('/api/auth/session', () => {
    return HttpResponse.json({});
  }),
  providers: http.get('/api/auth/providers', () => {
    return HttpResponse.json({
      credentials: {
        id: 'credentials',
        name: 'Credentials',
        type: 'credentials',
        signinUrl: 'http://localhost:3000/api/auth/signin/credentials',
        callbackUrl: 'http://localhost:3000/api/auth/callback/credentials',
      },
    });
  }),
  csrf: http.get('/api/auth/csrf', () => {
    return HttpResponse.json({ csrfToken: 'csrfToken' });
  }),
  authLog: http.post('/api/auth/_log', () => {
    return HttpResponse.json({});
  }),
};
