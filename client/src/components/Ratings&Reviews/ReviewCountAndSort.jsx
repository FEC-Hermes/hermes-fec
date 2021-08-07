import React from 'react';
import styled from 'styled-components';

const ReviewCountAndSortSC = styled.div`
  font-size: 21px;
  font-weight: bold;
  display: flex;
`;

const ReviewCountSC = styled.div`
  font-weight: bold;
  display: flex;
`;

const SortSelectSC = styled.select`
  font-size: 21px;
  font-weight: bold;
  text-decoration: underline;
  max-width: 340px;
  display: flex;
  border: 0;
  background: rgb(0, 0, 0, 0);
`;

const SortOptionSC = styled.option`
  font-size: 21px;

  margin: 8px;
  height: 50px;
  width: 150px
`;

const ReviewCountAndSort = ({reviewCount, changeSortType, productId}) => {
  // handle change
  const handleChange = (sortType) => {
    changeSortType(sortType);
  }
    //api call get new sort method, first parge
  // passed down setReviews(new info);
  return (
    <ReviewCountAndSortSC>
      <ReviewCountSC>{reviewCount} reviews, sorted by</ReviewCountSC>
      <SortSelectSC onChange={(e) => handleChange(e.target.value)}>
        <SortOptionSC value="relevant">Relevant</SortOptionSC>
        <SortOptionSC value="helpful">Helpful</SortOptionSC>
        <SortOptionSC value="newest">Newest</SortOptionSC>
      </SortSelectSC>
    </ReviewCountAndSortSC>
  );
};

export default ReviewCountAndSort;