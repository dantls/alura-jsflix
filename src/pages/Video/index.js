import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos';
import categoriesRepository from '../../repositories/categories';

import { Header } from './styles';

const Video = () => {
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);
  const history = useHistory();
  const initialValues = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServidor) => {
        setCategories(categoriesFromServidor);
      });
  }, []);

  return (
    <PageDefault>
      <Header>
        <h1>Cadastro de vídeo</h1>
        <Link to="/new/category">
          Nova Categoria
        </Link>
      </Header>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categories.find((category) => category.titulo === values.categoria);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          clearForm(initialValues);
          history.push('/');
        });
      }}
      >

        <FormField
          label="Titulo do Vídeo"
          type="text"
          name="titulo"
          onChange={handleChange}
          value={values.titulo}
        />
        <FormField
          label="URL"
          type="text"
          name="url"
          onChange={handleChange}
          value={values.url}
        />
        <FormField
          label="Categoria do Vídeo"
          type="text"
          name="categoria"
          onChange={handleChange}
          value={values.categoria}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

    </PageDefault>
  );
};

export default Video;
