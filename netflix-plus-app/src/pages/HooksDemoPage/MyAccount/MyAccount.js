import React, { useState } from 'react';

const MyAccount = () => {
  // use hooks only in top level
  // useState hook Returns a stateful value, and a function to update it in an array.
  const [accountName, setAccountName] = useState('Steve'); // initial state data
  console.log(accountName);

  const handleChangeAccountName = () => {
    console.log('clicked');
    setAccountName('John'); // updating the state
  }

  return (
    <div>
      <h3>MyAccount</h3>
      <p>Account Name: {accountName}</p>

      <button type='button' onClick={handleChangeAccountName}>Change Account Name</button>
    </div>
  );
}

export default MyAccount;
