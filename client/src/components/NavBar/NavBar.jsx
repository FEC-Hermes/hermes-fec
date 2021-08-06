import React, { useState, useEffect } from 'react';
const searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';
const hermeslogo = 'https://i.imgur.com/mLJVsNP.png';
import {Img, Logo, SearchBarContainer,InputBar, SearchBarWrapper } from './styles.js';

const NavBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <Logo src={hermeslogo} alt="Work"/>
        <InputBar type='text'></InputBar>
        <Img src={searchIcon} />
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

export default NavBar;