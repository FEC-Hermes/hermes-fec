import React, { useState, useEffect } from 'react';
import {Img, Logo, SearchBarContainer,InputBar, SearchBarWrapper } from './styles.js';

const searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';
const hermeslogo = 'https://i.imgur.com/mLJVsNP.png';


const NavBar = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const handleInput = text => {
  //   setSearchQuery(text);
  // };


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