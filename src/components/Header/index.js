import React from 'react';
import logo from "c:/Projects/eloGroup/desafio/src/assets/logo.png";

import { Container } from './styles';


function Header() {
  return (
  <Container>
      <img src={logo} alt="logo"/>
  </Container>
  );
}

export default Header;