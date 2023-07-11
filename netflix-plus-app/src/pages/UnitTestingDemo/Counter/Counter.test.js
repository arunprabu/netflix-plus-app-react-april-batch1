// AAA
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('has initial counter value of 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');
  });

  it('has properly working increment button', () => {
    render(<Counter />);
    // fetching initial counter value
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');

    // find the increment button element
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the click on incrementBtn
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 1');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 4');
  });

  // TODO: test whether the comp has properly working decrement button

  it('has counter with max value of 10 upon increment', () => {
    render(<Counter />);
    // fetching initial counter value
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');

    // find the increment button element
    const incrementBtn = screen.getByTestId('incrementBtn');
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }
    fireEvent.click(incrementBtn); // 11th time
    fireEvent.click(incrementBtn); // 12th time
    expect(counterValue.textContent).toBe('Counter Value: 10');
  });

  // TODO: has counter with min value of 0 upon decrement
});
