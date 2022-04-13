import React from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  register?: UseFormRegisterReturn;
}

const InputField: React.FC<InputProps> = ({
  label,
  register,
  error,
  ...props
}) => (
  <div className="inputWrapper">
    <label htmlFor={props.id} className={error ? 'error' : ''}>
      {label}
    </label>
    <input className={error ? 'error' : ''} {...props} {...register} />
    {error ? <span>{error}</span> : <span />}
  </div>
);

InputField.defaultProps = {
  error: '',
  register: undefined
};

export default InputField;
