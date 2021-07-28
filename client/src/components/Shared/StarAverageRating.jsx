import React from 'react';
import StarDisplay from './StarDisplay.jsx';

const StarAverageRating = ({ratings}) => {
  var totalRatings = 0;
  var totalStars = 0;
  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
    totalStars += Number(ratings[rating]) * Number(rating);
  }
  var rating = totalStars / totalRatings;
  var ratingDisplay = rating;

  return (
    <StarDisplay rating={rating}/>
  )
}

export default StarAverageRating;