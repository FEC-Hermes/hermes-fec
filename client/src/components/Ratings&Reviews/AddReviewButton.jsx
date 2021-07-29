import React from 'react';

const AddReviewButton = (props) => {
  const [modalShown, setModalShown] = React.useState(false);

  var handleClick = () => {
    setModalShown(!modalShown);
  }

  return (
    <div>
      <button submit="nothing" onClick={() => {handleClick()}}>
        Add Review
      </button>
      {
        modalShown
          ?
        <div className="add-review-modal">Party Haus of Pancakes</div>
          :
        null
      }
    </div>
  )
}

export default AddReviewButton;