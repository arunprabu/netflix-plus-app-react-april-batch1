import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';
import Users from './Users/Users';

const UnitTestingDemo = () => {
  return (
    <div>
      <h1>Unit Testing Examples | Let us learn cool stuff!</h1>

      <CompanyInfo foundedYear="1994" />

      <hr />
      <Counter />

      <hr />
      <h2>For Testing Forms Refer ContactUsPage.js and ContactUsPage.test.js</h2>

      <hr/>
      <Users />
    </div>
  );
}

export default UnitTestingDemo;
