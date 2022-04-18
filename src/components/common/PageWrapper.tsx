/* 
  PageWrapper.tsx is a simple component that recieves 
  2 divs in order to map other components using left or
  right section :) 
*/

import React from 'react';

interface Props {
  left: React.ReactElement | React.ReactElement[];
  right?: React.ReactElement | React.ReactElement[];
}

const PageWrapper = ({ left, right }: Props) => (
  <div className="wrapper">
    <div className="wrapper__left">{left}</div>
    {right ? <div className="wrapper__right">{right}</div> : null}
  </div>
);

PageWrapper.defaultProps = {
  right: null
};

export default PageWrapper;
