// AAA
import { fireEvent, render, screen } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';

describe('ContactUsPage', () => {
  it('has proper contact form with name, email, phone, query fields and submit button', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const phoneInput = screen.getByLabelText('Phone');
    const queryInput = screen.getByLabelText('Query');
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(queryInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });

  // negative test
  it('has the submit button in disabled state when fullName is empty', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const submitBtn = screen.getByRole('button');
    const mockEvent = {
      target: {
        value: ''
      }
    };

    fireEvent.change(nameInput, mockEvent);
    expect(submitBtn).toHaveAttribute('disabled');
  });

  // positive test
  it('has the submit button in enabled state when fullName is NOT empty', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const submitBtn = screen.getByRole('button');
    const mockEvent = {
      target: {
        value: 'john'
      }
    };

    fireEvent.change(nameInput, mockEvent);
    expect(submitBtn).not.toHaveAttribute('disabled');
  });

  // TODO: trigger the submit btn click and check whether success msg is present or not
  // TODO: mock axios call
});
