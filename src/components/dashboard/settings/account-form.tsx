'use client';

import FormLayout from '@src/components/common/formLayout/FormLayout';

interface AccountFormProps {
  email: string;
}

const AccountForm = ({ email }: AccountFormProps) => {
  return (
    <FormLayout
      formFields={[
        {
          label: 'Email',
          subLabel: 'Your email address cannot be changed.',
          errors: [],
          id: 'email',
          placeholder: email,
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
