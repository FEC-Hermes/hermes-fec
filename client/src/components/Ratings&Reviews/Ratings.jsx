import React from 'react';
import AverageDisplay from './AverageDisplay.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import BreakdownFilterDisplay from './BreakdownFilterDisplay.jsx';
import Characteristics from './Characteristics.jsx';

import ProductContext from '../contexts/ProductContext.js';

const Ratings = ({reviewFilter, updateReviewFilter, clearReviewFilter}) => {
  return (
    <ProductContext.Consumer>
      {({reviewMeta}) => {
        return (
          <div id="ratings">
            <AverageDisplay
              ratings={reviewMeta.ratings}
            />
            <PercentRecommended
              recommended={reviewMeta.recommended}
            />
            <RatingBreakdown ratings={reviewMeta.ratings}
              reviewFilter={reviewFilter}
              updateReviewFilter={updateReviewFilter}
            />
            <BreakdownFilterDisplay reviewFilter={reviewFilter}
              clearReviewFilter={clearReviewFilter}
             />
            <Characteristics characteristics={reviewMeta.characteristics}/>
          </div>
        )
      }}
    </ProductContext.Consumer>
  );
};

export default Ratings;