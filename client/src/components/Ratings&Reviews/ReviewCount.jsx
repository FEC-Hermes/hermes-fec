import React from 'react';

const ReviewCount = (props) => {
  var reviewCount = 64;
  return (
    <div>
      {reviewCount} reviews, sorted by
      <select>
        <option>helpful</option>
        <option>newest</option>
        <option>relevance</option>
      </select>
    </div>
  );
};

export default ReviewCount;