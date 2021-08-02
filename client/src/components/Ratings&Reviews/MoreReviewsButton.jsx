import React from 'react';

const MoreReviewsButton = ({getNextReviewPage}) => {
  const handleClick = () => {
    getNextReviewPage();
  };

  return (
    <button submit="nothing" onClick={() => handleClick()}>
      MORE REVIEWS
    </button>
  );
};

export default MoreReviewsButton;