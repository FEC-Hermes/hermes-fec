import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';
import StarAverageRating from '../Shared/StarAverageRating.jsx';

const AverageDisplay = ({ratings, product_id}) => {
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
        <StarDisplay rating={rating} productId={product_id} />
      </div>
    </div>
  );
};

export default AverageDisplay;