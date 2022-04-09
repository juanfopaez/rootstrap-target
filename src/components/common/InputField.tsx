/* eslint-disable no-undef */
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string;
}

const InputField: React.FC<InputProps> = ({ ...props }) => <input {...props} />;

export default InputField;
