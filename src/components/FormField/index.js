import React from 'react';
import propTypes from 'prop-types';

import { Label, Input, FormFieldWrapper } from './styles';

const FormField = ({
  label, name, type, value, onChange,
}) => {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  const fieldId = `id_${name}`;
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>

        <Input
          as={tag}
          type={type}
          id={fieldId}
          name={name}
          onChange={onChange}
          value={value}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.string,
  onChange: propTypes.func,
};

export default FormField;
