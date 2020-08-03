import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import { Main } from './styles';

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Header />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

export default PageDefault;
