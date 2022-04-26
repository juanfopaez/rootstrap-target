import React from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  id: string;
  register?: UseFormRegisterReturn;
}

const SelectField: React.FC<SelectProps> = ({
  label,
  register,
  error,
  id,
  ...props
}) => (
  <div className="selectWrapper">
    <label htmlFor={id} className={error ? 'error' : ''}>
      {label}
    </label>
    <select className={error ? 'error' : ''} id={id} {...props} {...register} />
    {error ? <span>{error}</span> : <span />}
  </div>
);

SelectField.defaultProps = {
  error: '',
  register: undefined
};

export default SelectField;
