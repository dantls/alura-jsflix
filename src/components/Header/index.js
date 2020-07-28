import React from 'react';
import Logo from '../../assets/img/logoJS.png';

import {LogoImg , Menu} from './styles';
import ButtonLink from '../ButtonLink';


const Header = () => {
  return(
    <Menu>
        <LogoImg src={Logo} alt="logo"/>
      <ButtonLink to="/new">
          Novo vídeo
      </ButtonLink>
    </Menu>
  );
}

export default Header;