import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';
import moment from 'moment';

const ReviewHeader = (props) => {
  return (
    <div className="review-header">
      <div className="header-star-display">
        <StarDisplay rating={props.rating} productId={props.productId}/>
      </div>
      <h2 className="review-user-and-timestamp">
        {`${props.reviewer_name}, ${moment(props.date).format('LL')}`}
      </h2>
    </div>
  );
};

export default ReviewHeader;