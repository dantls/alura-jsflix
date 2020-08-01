import React from 'react';

// import { Container } from './styles';

const FormField = ({label,name,type,value ,onChange}) => {
  
  return (
    <div>
      <label htmlFor="">
        {label}:
        <input 
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  )
}

export default FormField;