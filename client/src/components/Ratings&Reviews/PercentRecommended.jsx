import React from 'react';
import styled from 'styled-components';

const Percent_recommended = styled.h4`
   font-weight: 400;
`;

const PercentRecommended = ({recommended}) => {
  var recommendedCount = Number(recommended.true);
  var totalReviews = Number(recommended.true) + Number(recommended.false);
  var percentRecommended = 0;
  if (recommendedCount / totalReviews === 1) {
    percentRecommended = 100;
  } else {
    percentRecommended = (recommendedCount / totalReviews * 100).toFixed(1);
  }

  return (
    <Percent_recommended>
      {percentRecommended}% of reviews recommend this product
    </Percent_recommended>
  );
};

export default PercentRecommended;