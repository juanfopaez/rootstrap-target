import React from 'react';

import 'styles/components/PageWrapper.scss';

interface Props {
  children: React.ReactElement;
}
function PageWrapper({ children }: Props) {
  return <div className="wrapper">{children}</div>;
}
export default PageWrapper;
