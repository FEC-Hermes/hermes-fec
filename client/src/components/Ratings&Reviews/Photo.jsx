import React from 'react';

const Photo = ({photoUrl}) => {
  return (
    <img src={photoUrl} width="125" height="125" alt="review photo"/>
  )
}

export default Photo;