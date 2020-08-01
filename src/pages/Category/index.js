import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Category = () => {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default Category;