import React from 'react';
import styled from 'styled-components';

const Rating_count_row = styled.div`
  display:flex;
  align-items: center;
`;

const Rating_value = styled.p`
   margin-right:1rem;
`;

const RatingCount = (props) => {
  var handleClick = () => {
    // console.log(`Triggered star breakdown for ${props.count}`)
    props.updateReviewFilter(props.count);
  };

  return (
    <Rating_count_row onClick={() => {handleClick()}}>
      <Rating_value>{props.count} stars</Rating_value>
      <progress className="rating-count-bar" value={props.ratingCount} max={props.totalRatings} />
      <div className="rating-count">{props.ratingCount}</div>
    </Rating_count_row>
  );
};

export default RatingCount;