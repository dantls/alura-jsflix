import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';

import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialValues(categoriesWithVideos);
      }).catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialValues.length === 0 && (<div>Loading...</div>)}

      { !!initialValues && initialValues.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialValues[0].videos[0].titulo}
                url={initialValues[0].videos[0].url}
                videoDescription={initialValues[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialValues[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
