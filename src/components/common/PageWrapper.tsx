/* 
  PageWrapper.tsx is a simple component that recieves 
  2 divs in order to map other components using left or
  right section :) 
*/

import React from 'react';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const PageWrapper = ({ children }: Props) => (
  <div className="wrapper">{children}</div>
);

export default PageWrapper;
