import React from 'react';
import AverageDisplay from './AverageDisplay.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Characteristics from './Characteristics.jsx';

const Ratings = ({reviewMeta}) => {
  console.log('Review Meta');
  console.log(reviewMeta);

  return (
    <div id="ratings">
      <AverageDisplay
        productId={reviewMeta.product_id}
        ratings={reviewMeta.ratings}
      />
      <PercentRecommended
        recommended={reviewMeta.recommended}
      />
      <RatingBreakdown ratings={reviewMeta.ratings}/>
      <Characteristics characteristics={reviewMeta.characteristics}/>
    </div>
  );
};

export default Ratings;