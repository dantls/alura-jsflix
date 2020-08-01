import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

const Category = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [values, setValues] = useState(initialValues);
  const [categories, setCategories] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, values]);
    setValues(initialValues);
  };

  useEffect(() => {
    const URL = 'http://localhost:3004/categories';

    // const load = () => {
    //   fetch(URL)
    //     .then((response) => response.json())
    //     .then((resposta) => {
    //       console.log(resposta);
    //     });
    // };

    const load = async () => {
      const resource = await fetch(URL);
      const response = await resource.json();
      setCategories([...response]);
    };
    load();
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de categoria :</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="description"
          onChange={handleChange}
          value={values.description}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          onChange={handleChange}
          value={values.color}
        />

        <button type="submit">Cadastrar</button>
      </form>
      <ul>
        {
            categories.map((category, index) => (
              <li key={`${category.name}${index}`}>
                {category.name}
              </li>
            ))
          }
      </ul>
      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
};

export default Category;
