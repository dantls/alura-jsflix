import React from 'react';
import Logo from '../../assets/img/logoJS.png';

import {LogoImg , Menu} from './styles';


const Header = () => {
  return(
    <Menu>
      <LogoImg src={Logo} alt="logo"/>
    </Menu>
  );
}

export default Header;