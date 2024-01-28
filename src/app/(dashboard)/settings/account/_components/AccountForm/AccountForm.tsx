'use client';

import { useSession } from 'next-auth/react';
import FormLayout from '@src/ui/formLayout/FormLayout';

const AccountForm = () => {
  const session = useSession();
  return (
    <FormLayout
      formFields={[
        {
          label: 'Email',
          subLabel: 'Your email address cannot be changed.',
          errors: [],
          id: 'email',
          placeholder: session.data?.user?.email || '',
          register: {
            name: 'name',
            onBlur: async () => false,
            onChange: async () => false,
            ref: () => false,
          },
          disabled: true,
          type: 'email',
        },
      ]}
      errors={[]}
    />
  );
};

export default AccountForm;
