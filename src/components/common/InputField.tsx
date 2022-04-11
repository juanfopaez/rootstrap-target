import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className="inputWrapper">
    <label htmlFor={props.id} className={error ? 'error' : ''}>
      {label}
    </label>
    <input className={error ? 'error' : ''} {...props} />
    {error && <span>{error}</span>}
  </div>
);

InputField.defaultProps = {
  error: ''
};

export default InputField;
