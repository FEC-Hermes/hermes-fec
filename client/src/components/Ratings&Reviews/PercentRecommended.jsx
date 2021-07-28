import React from 'react';

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
    <div className="percent-recommended">
      {percentRecommended}% of reviews recommend this product
    </div>
  );
};

export default PercentRecommended;