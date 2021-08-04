import React from 'react';
import NewReviewModal from './NewReviewModal.jsx';
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

const AddReviewButton = (props) => {
  const [modalShown, setModalShown] = React.useState(false);

  var handleClick = () => {
    setModalShown(!modalShown);
  };

  return (
    <div>
      <Button submit="nothing" onClick={() => handleClick()}>
        Add Review
      </Button>
      {
        modalShown
          ?
          <NewReviewModal/>
          :
          null
      }
    </div>
  )
}

export default AddReviewButton;