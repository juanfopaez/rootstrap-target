import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button className="blackButton" {...props}>
    {children}
  </button>
);

export default Button;
