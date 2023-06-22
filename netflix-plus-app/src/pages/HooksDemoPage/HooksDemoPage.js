import React from 'react'
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';

const HooksDemoPage = () => {
  return (
    <>
      <h1>React Hooks Demo</h1>
      <h2>MyAccount | useState Hook Demo</h2>
      <MyAccount />

      <hr />
      <h2>Blog | useEffect Hook Demo</h2>
      <Blog />

      {/* <h2>useReducer and useRef Hook</h2>

      <h2>useId Hook</h2> */}
    </>
  );
}

export default HooksDemoPage;
