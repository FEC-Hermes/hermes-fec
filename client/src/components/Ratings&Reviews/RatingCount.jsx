import React from 'react';

const RatingCount = (props) => {
  return (
    <div className="rating-count-row">
      <div className="rating-value">{props.count} stars</div>
      <progress className="rating-count-bar" value={props.ratingCount} max={props.totalRatings} />
      <div className="rating-count">{props.ratingCount}</div>
    </div>
  );
};

export default RatingCount;