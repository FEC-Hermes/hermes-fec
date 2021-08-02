import React from 'react';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import AddReviewButton from './AddReviewButton.jsx';

const AdditionalReviewOptions = ({getNextReviewPage}) => {
  return (
    <div>
      <MoreReviewsButton getNextReviewPage={getNextReviewPage}/>
      <AddReviewButton />
    </div>
  );
};

export default AdditionalReviewOptions;