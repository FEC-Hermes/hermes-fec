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
    <img src={photoUrl} width="125" height="125" alt="review photo"/>
  );
};

export default Photo;