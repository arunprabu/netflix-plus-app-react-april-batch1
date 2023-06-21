import React from 'react'
import MyAccount from './MyAccount/MyAccount';

const HooksDemoPage = () => {
  return (
    <div>
      <h1>React Hooks Demo</h1>
      <h2>useState Hook</h2>
      <MyAccount />

      <hr/>
      {/* <h2>useEffect Hook</h2>

      <h2>useReducer and useRef Hook</h2>

      <h2>useId Hook</h2> */}
    </div>
  );
}

export default HooksDemoPage;
