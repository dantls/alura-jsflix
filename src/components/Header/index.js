import React from 'react';
import Logo from '../../assets/img/logoJS.png';
import { Link } from 'react-router-dom';

import {LogoImg , Menu} from './styles';
import ButtonLink from '../ButtonLink';


const Header = () => {
  return(
    <Menu>
      <Link to="/">
        <LogoImg src={Logo} alt="logo"/>
      </Link>
      <ButtonLink to="/new/video">
          Novo vídeo
      </ButtonLink>
    </Menu>
  );
}

export default Header;