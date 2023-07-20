import React from 'react';
import PropTypes from 'prop-types';
import MockFragment from './MockFragment/MockFragment';

const AboutUsPage = (props) => {
  return (
    <>
      <h1>AboutUsPage</h1>
      {/* <p>{props.test()}</p> */}

      <h2>Demo of Mock Fragment</h2>
      <MockFragment>
        <p>Our own Fragment-like component is serving this UI</p>
        <p>Refer: MockFragment Component in our codebase</p>
      </MockFragment>
    </>
  );
};

AboutUsPage.propTypes = {
  test: PropTypes.func
};

export default AboutUsPage;
