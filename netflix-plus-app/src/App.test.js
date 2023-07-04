/*
  1. How to write test cases? Test Pattern: AAA (Arrange, Act, Assert[must])
  2. Where to write test cases?  (here)
  3. How to test the app by tools? (tools are configured. you need to try 'npm run test')
*/

// Arrange
// import { render, screen } from '@testing-library/react';
import App from './App'; // sample taken for testing

// test case or a.k.a test spec or test
/*
test('App comp has Success! text', () => {
  // Act
  // writing the logic to test whether the app comp has success text or not
  render(<App />); // rending app component in a container which is document.body
  // Testing JSX Element by DOM Querying
  const successText = screen.getByText('Success!');
  // Assert (must)
  expect(successText).toBeInTheDocument();
});
*/

// 'it' is an alias of test.
/*
it('should have \'React is Cool\' texts', () => {
  render(<App />);
  const reactText = screen.getByText('React is Cool');
  expect(reactText).toBeInTheDocument();
});
*/

it('has proper App Component', () => {
  expect(App).toBeTruthy();
});

/*
  test, it, expect -- are from JEST
  render, screen -- are from @testing-library/react (RTL)
  toBeInTheDocument, toBeTruthy, toBe -- are matchers from @testing-library/jest-dom.
*/
