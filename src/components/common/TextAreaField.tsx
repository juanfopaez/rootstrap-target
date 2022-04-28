import React from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  id: string;
  register?: UseFormRegisterReturn;
}

const TextAreaField: React.FC<TextAreaProps> = ({
  label,
  register,
  error,
  id,
  ...props
}) => (
  <div className="inputWrapper">
    <label htmlFor={id} className={error ? 'error' : ''}>
      {label}
    </label>
    <textarea
      className={error ? 'error' : ''}
      id={id}
      {...props}
      {...register}
    />
    {error ? <span>{error}</span> : <span />}
  </div>
);

TextAreaField.defaultProps = {
  error: '',
  register: undefined
};

export default TextAreaField;
