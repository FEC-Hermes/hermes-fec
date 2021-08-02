import React, { useState, useEffect } from 'react';
const searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';
import {Img, SearchBarContainer,InputBar} from './styles.js';

const NavBar = () => {
  return (
    <SearchBarContainer>
      <InputBar type='text'></InputBar>
      <Img src={searchIcon} />
    </SearchBarContainer>
  );
};

export default NavBar;