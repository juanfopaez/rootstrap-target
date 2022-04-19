import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isInline?: boolean;
}

const Button = ({ children, isInline, ...props }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button className={isInline ? 'inlineButton' : 'blackButton'} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  isInline: false
};

export default Button;
