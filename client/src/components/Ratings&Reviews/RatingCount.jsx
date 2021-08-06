import React from 'react';
import BreakdownBar from './BreakdownBar.jsx';
import BreakdownBarInactive from './BreakdownBarInactive.jsx';
import styled from 'styled-components';

const Rating_count_row = styled.div`
  display:flex;
  align-items: center;
`;

const Rating_value = styled.p`
   margin-right:1rem;
   margin-top: 0;
   margin-bottom: 0;
`;

const RatingCount = ({
    ratingCount,
    totalRatings,
    count,
    reviewFilter,
    updateReviewFilter
  }) => {
  var handleClick = () => {
    console.log(`Triggered star breakdown for ${count}`)
    updateReviewFilter(count);
  };

  return (
    <Rating_count_row onClick={() => {handleClick()}}>
      <Rating_value>{count} stars</Rating_value>
      {
        reviewFilter.active && !reviewFilter.stars[count]
          ?
        <BreakdownBarInactive className="rating-count-bar"
          value={ratingCount} max={totalRatings}
        />
          :
        <BreakdownBar className="rating-count-bar"
          value={ratingCount} max={totalRatings}
        />

      }
      <div className="rating-count">{ratingCount}</div>
    </Rating_count_row>
  );
};

export default RatingCount;