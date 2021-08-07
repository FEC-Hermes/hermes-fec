import React, { useState } from 'react';

import styled from 'styled-components';

const FullImageContainer = styled.main`
  display:grid;
  grid-row-gap: 0.1rem;
  padding: 10px;
  position: fixed;
  z-index: 200;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 8px;
`;

const FullImageDisplay = ({ reviewImgUrl, setReviewImgUrl}) => {
  const handleClick = () => {
    setReviewImgUrl('');
  };

  return (
    <FullImageContainer onClick={(e) => {handleClick(e)}}>
      <img src={reviewImgUrl} />
    </FullImageContainer>
  );
};

export default FullImageDisplay;