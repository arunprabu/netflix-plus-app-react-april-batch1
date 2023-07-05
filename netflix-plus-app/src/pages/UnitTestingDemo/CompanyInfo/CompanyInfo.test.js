import { render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';

// TEST SUITE = group of related tests or test specs
describe('CompanyInfo', () => {
  // test spec
  it('has Cognizant as company name', () => {
    render(<CompanyInfo />);
    const companyName = screen.getByTestId('companyName');
    // console.log(companyName.textContent);
    expect(companyName.textContent).toBe('Company Name: Cognizant');
  });

  // testing props
  it('receives foundedYear prop and displays in JSX', () => {
    // when you are testing props
    // -- always render the comp with necessary props
    render(<CompanyInfo foundedYear="2000" />);
    const foundedYear = screen.getByTestId('foundedYear');
    expect(foundedYear.textContent).toBe('Founded Year: 2000');
  });

  // TODO: receives headquarters prop and displays in JSX
  // in browser I want to see this 'Headquarters: Teaneck, New Jersey, U.S'
});
