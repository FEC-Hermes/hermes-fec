import React from 'react';
import styled from 'styled-components';

const ReviewImg = styled.img`
  padding-right: 35px;
`;


const Photo = ({ photoUrl, setReviewImgUrl}) => {
  const handleClick = () => {
    setReviewImgUrl(photoUrl);
  };

  return (
    <ReviewImg src={photoUrl} width="125" height="125" alt="review photo" onClick={() => handleClick()}/>
  );
};

export default Photo;