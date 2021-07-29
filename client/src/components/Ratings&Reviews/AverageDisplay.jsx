import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';

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
    <div id="average-display">
      <div id="rating-display">{ratingDisplay}</div>
      <div id="summary-star-display">
        <StarDisplay rating={rating}/>
      </div>
    </div>
  );
};

export default AverageDisplay;