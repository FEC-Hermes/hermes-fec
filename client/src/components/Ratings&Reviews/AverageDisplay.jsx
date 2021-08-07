import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';
import styled from 'styled-components';

const Average_display = styled.div`
    display: flex;
    align-items: center;
    `;
    //margin-left:1rem;

    const H1 = styled.h1`
    font-size:${props => props.font_size};
    font-family:${props => props.font};
 `;

const AverageDisplay = ({ratings}) => {
  var totalRatings = 0;
  var totalStars = 0;
  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
    totalStars += Number(ratings[rating]) * Number(rating);
  }
  var rating = totalStars / totalRatings;
  var ratingDisplay = rating;
  if (rating !== Math.floor(rating)) {
    ratingDisplay = rating.toFixed(1);
  }
  return (
    <Average_display>
      <H1 font_size={'3.5rem'} font={ 'system-ui'}>{ratingDisplay}</H1>
      <div id="summary-star-display">
        <StarDisplay rating={rating}/>
      </div>
    </Average_display>
  );
};

export default AverageDisplay;