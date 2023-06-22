import React, { useState } from 'react';

const MyAccount = () => {
  // use hooks only in top level
  // useState hook Returns a stateful value, and a function to update it in an array.
  const [accountName, setAccountName] = useState('John');
  const [age, setAge] = useState(20);

  const handleChangeAccountName = () => {
    // updating the state
    setAccountName('Steve');
  }

  return (
    <div>
      <h3>MyAccount</h3>
      <p>Account Name: {accountName}</p>
      <button type="button" onClick={handleChangeAccountName}>
        Change Account Name
      </button>

      <p>Age: {age}</p>
      <button
        type="button"
        onClick={() => {
          setAge(30);
        }}
      >
        Change Age
      </button>

      <hr/>
      <button type="button">Login | Logout</button>
    </div>
  );
}

export default MyAccount;
