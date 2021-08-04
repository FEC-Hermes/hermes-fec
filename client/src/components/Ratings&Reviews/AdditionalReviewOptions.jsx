import React from 'react';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import AddReviewButton from './AddReviewButton.jsx';
import styled from 'styled-components';

const ReviewButton_Container = styled.div`
   display:flex;
   justify-content: space-between;
`;

const AdditionalReviewOptions = () => {
  return (
    <ReviewButton_Container>
      <MoreReviewsButton />
      <AddReviewButton />
    </ReviewButton_Container>
  );
};

export default AdditionalReviewOptions;