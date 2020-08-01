import React from 'react';

import Container from './styles';

const ButtonLink = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default ButtonLink;
