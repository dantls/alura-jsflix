import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

// import { Container } from './styles';

const Video = () => (
  <PageDefault>
    <h1>Cadastro de vídeo</h1>
    <Link to="/new/category">
      Cadastrar Categoria
    </Link>
  </PageDefault>
);

export default Video;
