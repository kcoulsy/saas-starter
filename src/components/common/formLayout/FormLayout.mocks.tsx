/* eslint-disable no-alert */
import { FormLayoutProps } from './FormLayout';

const base: FormLayoutProps = {
  title: 'Example Form',
  description: 'This is an example form',
  formFields: [
    {
      id: 'id',
      type: 'text',
      label: 'Label',
      placeholder: 'Placeholder',
      register: {
        name: 'name',
        onBlur: async () => false,
        onChange: async () => false,
        ref: () => false,
      },
      errors: [],
    },
    {
      id: 'id2',
      type: 'text',
      label: 'Label',
      placeholder: 'Placeholder',
      register: {
        name: 'name',
        onBlur: async () => false,
        onChange: async () => false,
        ref: () => false,
      },
      errors: [],
    },
  ],
  submitButtonLabel: 'Submit',
  errors: [],
};

const withLinkInDescription: FormLayoutProps = {
  ...base,
  description: (
    <div>
      hello {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="underline">
        world
      </a>
    </div>
  ),
};

const withFooter: FormLayoutProps = {
  ...base,
  footer: (
    <div>
      Footer here with a link {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="underline">
        click me
      </a>
    </div>
  ),
};

const withErrors: FormLayoutProps = {
  title: 'Form With Errors',
  description: 'This form will include some errors',
  formFields: [
    {
      id: 'id',
      type: 'text',
      label: 'Label',
      placeholder: 'Placeholder',
      register: {
        name: 'name',
        onBlur: async () => alert('onBlur'),
        onChange: async () => alert('onChange'),
        ref: () => false,
      },
      errors: ['Input Error 1', 'Input Error 2'],
    },
    {
      id: 'id2',
      type: 'text',
      label: 'Label',
      placeholder: 'Placeholder',
      register: {
        name: 'name',
        onBlur: async () => alert('onBlur'),
        onChange: async () => alert('onChange'),
        ref: () => false,
      },
      errors: ['Input Error 1', 'Input Error 2'],
    },
  ],
  errors: ['Form Error 1', 'Form Error 2'],
  submitButtonLabel: 'Submit',
};

export const mockFormLayoutProps = {
  base,
  withLinkInDescription,
  withFooter,
  withErrors,
};
