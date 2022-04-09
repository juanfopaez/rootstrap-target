import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputProps> = ({ label, ...props }) => (
  <div>
    <label>{label}</label>
    <input {...props} />
  </div>
);
export default InputField;
