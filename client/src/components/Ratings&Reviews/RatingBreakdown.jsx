import React from 'react';
import RatingCount from './RatingCount.jsx';

const RatingBreakdown = (props)=> {
  var totalRatings = 64;
  var ratings = {
    1: 3,
    2: 6,
    3: 7,
    4: 32,
    5: 16
  };

  return (
    <div>
      <RatingCount ratingCount={ratings[1]}
        totalRatings={totalRatings}
        count={1}
      />
      <RatingCount ratingCount={ratings[2]}
        totalRatings={totalRatings}
        count={2}
      />
      <RatingCount ratingCount={ratings[3]}
        totalRatings={totalRatings}
        count={3}
      />
      <RatingCount ratingCount={ratings[4]}
        totalRatings={totalRatings}
        count={4}
      />
      <RatingCount ratingCount={ratings[5]}
        totalRatings={totalRatings}
        count={5}
      />
    </div>
  );
};

export default RatingBreakdown;