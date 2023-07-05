import PropTypes from 'prop-types';

const CompanyInfo = ({ foundedYear }) => {
  return (
    <div>
      <h2>Company Info | Testing JSX, Props, CSS, Events, States and Snapshot</h2>
      <h3 data-testid="companyName">
        Company Name: Cognizant
      </h3>
      <p data-testid="foundedYear">
        Founded Year: {foundedYear}
      </p>
    </div>
  );
};

CompanyInfo.propTypes = {
  foundedYear: PropTypes.string
}

export default CompanyInfo;
