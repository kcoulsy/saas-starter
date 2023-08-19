export const pageRoutes = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  dashboard: '/dashboard',
  settings: {
    account: '/settings/account',
    subscription: '/settings/subscription',
    notifications: '/settings/notifications',
  },
  verify: (token: string) => `/verify/${token}`,
  resetPassword: (token: string) => `/reset-password/${token}`,
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
