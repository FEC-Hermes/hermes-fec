import React from 'react';
import AverageDisplay from './AverageDisplay.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import BreakdownFilterDisplay from './BreakdownFilterDisplay.jsx';
import Characteristics from './Characteristics.jsx';

import ProductContext from '../contexts/ProductContext.js';
import styled from 'styled-components';

const Ratings = ({reviewFilter, updateReviewFilter, clearReviewFilter}) => {
  const RatingsContainer = styled.div`
    padding-right: 32px;
  `;

  return (
    <ProductContext.Consumer>
      {({reviewMeta}) => {
        return (
          <RatingsContainer>
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
          </RatingsContainer>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default Ratings;