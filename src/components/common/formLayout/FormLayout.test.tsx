import { renderComponent } from '@src/utils/testing';
import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/dom';
import { describe } from 'vitest';
import * as stories from './FormLayout.stories';

const { Default, WithErrors } = composeStories(stories);

describe('FormLayout', () => {
  it('should render correctly', () => {
    const { asFragment } = renderComponent(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with errors', () => {
    const { asFragment } = renderComponent(<WithErrors />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the title', () => {
    renderComponent(<Default title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should render the description', () => {
    renderComponent(<Default description="Test Description" />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should allow jsx in description', () => {
    renderComponent(<Default description={<span data-testid="jsx-element">Test Description</span>} />);
    expect(screen.getByTestId('jsx-element')).toBeInTheDocument();
  });

  it('should render all the form fields', () => {
    const mockFormFields = [
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
        errors: [],
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
        errors: [],
      },
      {
        id: 'id3',
        type: 'text',
        label: 'Label',
        placeholder: 'Placeholder',
        register: {
          name: 'name',
          onBlur: async () => alert('onBlur'),
          onChange: async () => alert('onChange'),
          ref: () => false,
        },
        errors: [],
      },
    ];

    renderComponent(<Default formFields={mockFormFields} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(mockFormFields.length);
  });

  it('should render all the errors', () => {
    const mockErrors = ['Error 1', 'Error 2', 'Error 3'];

    renderComponent(<WithErrors errors={mockErrors} />);

    expect(screen.getByText('Error 1')).toBeInTheDocument();
    expect(screen.getByText('Error 2')).toBeInTheDocument();
    expect(screen.getByText('Error 3')).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    renderComponent(<Default submitButtonLabel="Test Submit" />);
    expect(screen.getByText('Test Submit')).toBeInTheDocument();
  });
});
