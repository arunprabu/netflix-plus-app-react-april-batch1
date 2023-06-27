import React, { useId } from 'react';

const PaymentForm = () => {
  // useId returns a unique ID string associated with this particular useId call in this particular component.
  // Generating unique IDs for accessibility attributes
  const ccHint = useId();
  console.log(ccHint);

  const ccValidUptoHint = useId();
  console.log(ccValidUptoHint);

  return (
    <div>
      <h3>Enter Credit Card Details</h3>
      <div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Enter Credit Card number"
            maxLength={16}
            aria-describedby={ccHint}
          />
          <label htmlFor="floatingInput">Credit Card Number</label>
          <p id={ccHint}>The Credit card number should be of exactly 16 characters</p>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingValidUpto"
            placeholder="CC Valid Upto"
            aria-describedby={ccValidUptoHint}
          />
          <label htmlFor="floatingValidUpto">Valid Upto</label>
          <p id={ccValidUptoHint}>Enter in MM/YYYY format</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
