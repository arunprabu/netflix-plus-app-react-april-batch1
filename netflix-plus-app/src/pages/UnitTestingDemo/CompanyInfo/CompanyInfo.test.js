import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
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

  // Testing Inline Styles
  it('has company founded year in red color text and fontSize 20px', () => {
    render(<CompanyInfo foundedYear="2000" />);
    const foundedYear = screen.getByTestId('foundedYear');
    // [RECOMMENDED]: to use colors in either rgb format or hexa in both comp and test
    expect(foundedYear).toHaveStyle({
      color: 'rgb(255, 0, 0)',
      fontSize: '20px'
    });
  });

  // TODO: Testing External Css Class
  /*
   * testing whether a button has css class btn-primary
   * the button should have the text - JOIN COGNIZANT
   * use data-testid
   * you can have multiple expectations
   */

  // Let's find out whether the input has the right placeholder
  it('has an input with `Enter Your Country Name` as placeholder text', () => {
    render(<CompanyInfo />);
    // finding input element
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    expect(countryInput).toBeTruthy();
  });

  it('displays countryName USA by default and updates JSX onChange of country input', () => {
    render(<CompanyInfo />);
    // finding input element
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    console.log(countryInput.value);
    expect(countryInput.value).toBe('USA');

    const mockEventObject = {
      target: {
        value: 'Japan'
      }
    };

    // now checking whether the onChange event handler is working or not
    // as the comp is rendered in test runner -- we can't use mouse or keyboard as input devices
    // so, let's trigger the event thru program
    fireEvent.change(countryInput, mockEventObject);
    // finally let's check if the input element is showing the change
    expect(countryInput.value).toBe('Japan');

    expect(screen.getByTestId('visitWebsite')).toHaveTextContent(
      'Please visit Cognizant Japan Website'
    );
  });

  // Snapshot Testing
  it('has right CompanyInfo snapshot with all requirements completed', () => {
    // to take snapshot you need to use react-test-renderer // npm i react-test-renderer -D
    // Taking snapshot and converting it into JSON
    // [RECOMMENDED]: Take snapshot with all possible props as well as props children
    const snapshotInJson = renderer.create(<CompanyInfo foundedYear="2006"/>).toJSON();
    // Let's assert
    expect(snapshotInJson).toMatchSnapshot();
  });
});
