import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import { Main } from './styles';


const PageDefault = ({children  }) => {
  return (
    <> 
      <Header />
        <Main>  
         {children}
        </Main>
      <Footer />
    </>
  )
}

export default PageDefault;