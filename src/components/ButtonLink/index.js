import React from 'react';

import  Container  from './styles';

const ButtonLink = ({children,...rest}) => {
  return(
    <Container {...rest}>
      {children}
    </Container>
  );
}

export default ButtonLink;