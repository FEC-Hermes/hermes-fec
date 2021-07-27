import React from 'react';

const PercentRecommended = (props) => {
  var recommendedCount = 35;
  var totalReviews = 45;
  var percentRecommended = 0;
  if (recommendedCount / totalReviews === 1) {
    percentRecommended = 100;
  } else {
    percentRecommended = (recommendedCount / totalReviews * 100).toFixed(1);
  }

  return (
    <div className="percent-recommended">{percentRecommended}% of reviews recommend this product</div>
  );
};

export default PercentRecommended;