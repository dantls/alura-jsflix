import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleChange = (infosDoEvento) => {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    handleChange,
    values,
    clearForm,
  };
};

export default useForm;
