import { useState } from 'react';

const Counter = () => {
  const [ticker, setTicker] = useState(0);

  const handleIncrement = () => {
    if (ticker < 10) {
      setTicker(ticker + 1);
    }
  };

  return (
    <div>
      <h2>Counter | Testing Click and state update with Conditionals</h2>
      <p data-testid="counterValue">Counter Value: {ticker}</p>

      <button
        type="button"
        className="btn btn-sm btn-success"
        onClick={handleIncrement}
        data-testid="incrementBtn"
      >
        Increment
      </button>

      {/* TODO: Implement Decrement Logic */}
      <button type="button" className="btn btn-sm btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
