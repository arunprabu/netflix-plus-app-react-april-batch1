import { render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';

// test spec
it('has Cognizant as company name', () => {
  render(<CompanyInfo />);
  const companyName = screen.getByTestId('companyName');
  // console.log(companyName.textContent);
  expect(companyName.textContent).toBe('Company Name: Cognizant');
});
