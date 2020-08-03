import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const Category = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, values]);
    clearForm();
  };

  // const load = () => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((resposta) => {
  //       console.log(resposta);
  //     });
  // };
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devsoutinhoflix.herokuapp.com/categorias';
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

        <Button type="submit">Cadastrar</Button>
      </form>
      <ul>
        {
            categories.map((category, index) => (
              <li key={`${category.titulo}${index}`}>
                {category.titulo}
              </li>
            ))
          }
      </ul>
      {/* <Link to="/">
        Voltar para Home
      </Link> */}
    </PageDefault>
  );
};

export default Category;
