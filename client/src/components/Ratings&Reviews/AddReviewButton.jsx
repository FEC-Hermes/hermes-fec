import React from 'react';
import NewReviewModal from './NewReviewModal.jsx';


const AddReviewButton = (props) => {
  const [modalShown, setModalShown] = React.useState(false);

  var handleClick = () => {
    setModalShown(!modalShown);
  };

  return (
    <div>
      <button submit="nothing" onClick={() => {handleClick()}}>
        Add Review
      </button>
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