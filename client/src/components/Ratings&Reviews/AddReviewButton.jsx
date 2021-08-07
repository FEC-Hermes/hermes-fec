import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: 11rem;
  background-color: white;
  height: 3.5rem;
  border: 1px solid black;
 `;
const Button_Container = styled.div`
    display: flex;
    align-items: center;
    margin-left:2rem;
 `;

const AddReviewButton = ({ toggleModalShown}) => {

  var handleClick = () => {
    setModalShown(!modalShown);
  };

  return (
    <div>
      <Button submit="nothing" onClick={toggleModalShown}>
        ADD A REVIEW +
      </Button>
    </div>
  )
}

export default AddReviewButton;