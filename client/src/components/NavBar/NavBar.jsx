import React, { useState, useEffect } from 'react';
const searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';
import {Img, SearchBarContainer,InputBar, SearchBarWrapper } from './styles.js';

const NavBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <InputBar type='text'></InputBar>
        <Img src={searchIcon} />
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

export default NavBar;