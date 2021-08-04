import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  width: 11rem;
  background-color: white;
  height: 3.5rem;
  border: 1px solid black;
 `;

const MoreReviewsButton = ({getNextReviewPage}) => {
  const handleClick = () => {
    getNextReviewPage();
  };

  return (
    <Button submit="nothing" onClick={() => handleClick()}>
       More Reviews
    </Button>
  )
}

export default MoreReviewsButton;