import React, { useState, useEffect } from 'react';
const searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';
const hermeslogo = 'https://i.imgur.com/mLJVsNP.png';
import {Img, Logo, SearchBarContainer,InputBar, SearchBarWrapper } from './styles.js';


const NavBar = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const handleInput = text => {
  //   setSearchQuery(text);
  // };

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <InputBar onChange={({target:{value}}) => handleInput(value)}type='text' aria-label="search bar"></InputBar>
        <Img src={searchIcon} alt="search"/>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

export default NavBar;