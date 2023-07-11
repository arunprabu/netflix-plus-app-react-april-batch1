import PropTypes from 'prop-types';
import { useState } from 'react';

const CompanyInfo = ({ foundedYear }) => {
  const [countryName, setCountryName] = useState('USA');

  const handleCountryNameChange = (event) => {
    console.log(event.target.value);
    setCountryName(event.target.value);
  };

  return (
    <div>
      <h2>Company Info | Testing JSX, Props, CSS, Events, States and Snapshot</h2>
      <h3 data-testid="companyName">Company Name: Cognizant</h3>
      <p data-testid="foundedYear" style={{ color: '#ff0000', fontSize: '20px' }}>
        Founded Year: {foundedYear}
      </p>

      <input
        type="text"
        value={countryName}
        placeholder="Enter Your Country Name"
        onChange={handleCountryNameChange}
      />
      <p data-testid="visitWebsite">
        Please visit Cognizant {countryName} Website
      </p>
    </div>
  );
};

CompanyInfo.propTypes = {
  foundedYear: PropTypes.string
};

export default CompanyInfo;
