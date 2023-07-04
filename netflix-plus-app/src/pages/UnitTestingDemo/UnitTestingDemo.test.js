// TEST PATTERN: AAA
// Arrange
import { render, screen } from '@testing-library/react';
import UnitTestingDemo from './UnitTestingDemo';

it('should have case-insensitive heading with Unit Testing Examples text', () => {
  render(<UnitTestingDemo />);
  // for case-insensitive and partial text search you can use regexp
  const heading = screen.getByText(/unit testing examples/i);
  expect(heading).toBeInTheDocument();
});
