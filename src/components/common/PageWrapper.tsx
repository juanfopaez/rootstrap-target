/* 
  PageWrapper.tsx is a simple component that recieves 
  2 divs in order to map other components using left or
  right section :) 
*/

import React from 'react';

import styles from 'styles/components/common/PageWrapper.module.scss';

interface Props {
  children: React.ReactElement;
}

const PageWrapper = ({ children }: Props) => (
  <div className={styles.wrapper}>{children}</div>
);

export default PageWrapper;
