import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
}

const BlackButton = ({ children, ...props }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button className="blackButton" {...props}>
    {children}
  </button>
);

export default BlackButton;
