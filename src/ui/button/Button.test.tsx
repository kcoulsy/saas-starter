import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './Button.stories';
import userEvent from '@testing-library/user-event';

const { Default, Disabled, Loading } = composeStories(stories);

describe('Button', () => {
  it('should render and match snapshot', () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render disabled', () => {
    const { asFragment } = render(<Disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with custom class', () => {
    render(<Default classes="custom-class" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('custom-class');
  });

  it('should render with custom text', () => {
    render(<Default label="Custom text" />);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Custom text');
  });

  it('should call onClick when clicked', async () => {
    const onClick = vi.fn().mockImplementation(() => {});

    render(<Default onClick={onClick} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick if the button is disabled', async () => {
    const onClick = vi.fn().mockImplementation(() => {});

    render(<Disabled onClick={onClick} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render spinner when isLoading is true', () => {
    render(<Loading />);

    const button = screen.getByRole('button');
    const spinner = screen.getByRole('status');

    expect(button).toContainElement(spinner);
  });
});
