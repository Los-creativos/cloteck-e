import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentForm from './PaymentForm';

describe('PaymentForm Component', () => {
  test('renders PaymentForm component', () => {
    render(<PaymentForm />);
    
    expect(screen.getByText('Payment Details')).toBeInTheDocument();
  });

  test('handles form submission with valid data', () => {
    render(<PaymentForm />);
    
    fireEvent.change(screen.getByLabelText('Card Number'), { target: { value: '1234 1234 1234 1234' } });
    fireEvent.change(screen.getByLabelText('CVC/CVV'), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText('Card Holder Name'), { target: { value: 'Anghelo Zambrana' } });
    fireEvent.change(screen.getByPlaceholderText('MM'), { target: { value: '12' } });
    fireEvent.change(screen.getByPlaceholderText('YY'), { target: { value: '23' } });

    fireEvent.click(screen.getByText('Complete Order'));

    expect(console.log).toHaveBeenCalledWith('Payment successful');
  });

  test('handles form submission with invalid data', () => {
    render(<PaymentForm />);
    
    fireEvent.change(screen.getByLabelText('Card Number'), { target: { value: 'invalid-card-number' } });
    fireEvent.change(screen.getByLabelText('CVC/CVV'), { target: { value: 'invalid-cvc' } });
    fireEvent.change(screen.getByLabelText('Card Holder Name'), { target: { value: '1234' } });
    fireEvent.change(screen.getByPlaceholderText('MM'), { target: { value: '15' } });
    fireEvent.change(screen.getByPlaceholderText('YY'), { target: { value: '21' } });

    fireEvent.click(screen.getByText('Complete Order'));

    expect(console.error).toHaveBeenCalledWith('Invalid payment details');
    expect(screen.getByText('Please enter a valid card number.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid CVC/CVV.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid card holder name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid expiration date.')).toBeInTheDocument();
  });
});
