export const pageRoutes = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  dashboard: '/dashboard',
} as const;

export const apiRoutes = {
  auth: {
    register: {
      post: '/api/register',
    },
    verify: {
      post: '/api/verify',
    },
  },
} as const;
