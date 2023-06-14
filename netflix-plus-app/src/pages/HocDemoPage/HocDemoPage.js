import React from 'react'
import Hello from './Hello/Hello'
import Bye from './Bye/Bye';

import applyStyles from '../../hoc/applyStyles';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <h1>HOC Demo</h1>

      <StyledHello name="John"/>
      <StyledBye name="John"/>

    </div>
  );
}

export default HocDemoPage
