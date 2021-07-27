import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';

const AverageDisplay = (props) => {
  var rating = 3.74;
  var ratingDisplay = rating;
  if (rating !== Math.floor(rating)) {
    ratingDisplay = rating.toFixed(1);
  }
  return (
    <div id="average-display">
      <div id="rating-display">{ratingDisplay}</div>
      <div id="summary-star-display">
        <StarDisplay rating={rating} productId={1} />
      </div>
    </div>
  );
};

export default AverageDisplay;