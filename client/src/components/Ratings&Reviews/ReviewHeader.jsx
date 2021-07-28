import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';
import moment from 'moment';

const ReviewHeader = (props) => {
  return (
    <div className="review-header">
      <div className="header-star-display">
        <StarDisplay rating={props.rating} productId={props.productId}/>
      </div>
      <div className="review-user-and-timestamp">
        {props.reviewer_name},
        {moment(props.date).format('LL')}
      </div>
    </div>
  );
};

export default ReviewHeader;