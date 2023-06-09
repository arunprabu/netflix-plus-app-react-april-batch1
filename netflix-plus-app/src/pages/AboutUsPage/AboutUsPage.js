import React from 'react'
import MockFragment from './MockFragment/MockFragment';

const AboutUsPage = () => {

  const x = "10";

  return (
    <>
      <h1>AboutUsPage</h1>
      <p>{x()}</p>

      <h2>Demo of Mock Fragment</h2>
      <MockFragment>
        <p>Our own Fragment-like component is serving this UI</p>
        <p>Refer: MockFragment Component in our codebase</p>
      </MockFragment>
    </>
  );
}

export default AboutUsPage