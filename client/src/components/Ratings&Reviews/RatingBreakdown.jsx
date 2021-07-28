import React from 'react';
import RatingCount from './RatingCount.jsx';

const RatingBreakdown = ({ratings})=> {
  var totalRatings = 0;
  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
  }

  return (
    <div>
      <RatingCount ratingCount={Number(ratings[5])}
        totalRatings={totalRatings}
        count={5}
      />
      <RatingCount ratingCount={Number(ratings[4])}
        totalRatings={totalRatings}
        count={4}
      />
      <RatingCount ratingCount={Number(ratings[3])}
        totalRatings={totalRatings}
        count={3}
      />
      <RatingCount ratingCount={Number(ratings[2])}
        totalRatings={totalRatings}
        count={2}
      />
      <RatingCount ratingCount={Number(ratings[1])}
        totalRatings={totalRatings}
        count={1}
      />
    </div>
  );
};

export default RatingBreakdown;