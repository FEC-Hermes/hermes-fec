import React from 'react';

const ReviewCountAndSort = ({reviewCount, changeSortType, productId}) => {
  // handle change
  const handleChange = (sortType) => {
    changeSortType(sortType);
  }
    //api call get new sort method, first parge
  // passed down setReviews(new info);
  return (
    <div>
      {reviewCount} reviews, sorted by
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

export default ReviewCountAndSort;