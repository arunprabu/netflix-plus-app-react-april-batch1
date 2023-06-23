import React from 'react'
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';

const HooksDemoPage = () => {
  return (
    <>
      <h1>React Hooks Demo</h1>
      <h2>MyAccount | useState Hook Demo</h2>
      <MyAccount />

      <hr />
      <h2>Blog | useEffect Hook Demo</h2>
      <Blog />

      <hr />
      <h2>useReducer and useRef Hook</h2>
      <TodosVariant1 />
      <TodosVariant2 />

      {/* <h2>useId Hook</h2> */}
    </>
  );
}

export default HooksDemoPage;
