import React from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import categoriesRepository from '../../repositories/categories';

const Category = () => {
  const history = useHistory();
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);

  // const [categories, setCategories] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    categoriesRepository.create({
      titulo: values.titulo,
      description: values.description,
      color: values.color,
    }).then(() => {
      clearForm(initialValues);
      history.push('/');
    });
  };

  return (
    <PageDefault>
      <h1>Cadastro de categoria :</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          onChange={handleChange}
          value={values.titulo}
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
          name="cor"
          onChange={handleChange}
          value={values.cor}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

    </PageDefault>
  );
};

export default Category;
