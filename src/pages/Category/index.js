import React,{ useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Category = () => {
  const [category, setCategory] = useState('Filmes');
  console.log(category)

  return (
    <PageDefault>
      <h1>Cadastro de categoria : {category} </h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default Category;