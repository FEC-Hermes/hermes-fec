import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  width: 11rem;
  background-color: white;
  height: 3.5rem;
 `;

const MoreReviewsButton = () => {
  return (
    <Button submit="nothing">
       More Reviews
    </Button>
  )
}

export default MoreReviewsButton;