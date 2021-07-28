import React from 'react';

const ReviewCount = ({reviewCount}) => {
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