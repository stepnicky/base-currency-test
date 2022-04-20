import { cleanup, render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });
  it('should run action callback with proper data on form submit', () => {
    
    const action = jest.fn();
    
    const testCases = [
      { amount: '100', from: 'PLN', to: 'USD' },
      { amount: '20', from: 'USD', to: 'PLN' },
      { amount: '200', from: 'PLN', to: 'USD' },
      { amount: '345', from: 'USD', to: 'PLN' },
    ];

    for(const testCase of testCases) {
        
      render(<CurrencyForm action={action} />);
      // find “convert” button
      const submitButton = screen.getByText('Convert');

      // find inputs
      const amountForm = screen.getByTestId('amount');
      const fromSelect = screen.getByTestId('from-select');
      const toSelect = screen.getByTestId('to-select');

      // set values to inputs
      userEvent.type(amountForm, testCase.amount);
      userEvent.selectOptions(fromSelect, testCase.from);
      userEvent.selectOptions(toSelect, testCase.to);
        
      userEvent.click(submitButton);
      expect(action).toHaveBeenCalledTimes(1);
      expect(action).toHaveBeenCalledWith({
        amount: parseInt(testCase.amount), from: testCase.from, to: testCase.to
      });
      cleanup();
    }
  });  
    
});