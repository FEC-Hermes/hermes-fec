import React from 'react';

const RatingCount = (props) => {
  var handleClick = () => {
    console.log(`Triggered star breakdown for ${props.count}`)
    props.updateReviewFilter(props.count);
  };

  return (
    <div className="rating-count-row" onClick={() => {handleClick()}}>
      <div className="rating-value">{props.count} stars</div>
      <progress className="rating-count-bar" value={props.ratingCount} max={props.totalRatings} />
      <div className="rating-count">{props.ratingCount}</div>
    </div>
  );
};

export default RatingCount;