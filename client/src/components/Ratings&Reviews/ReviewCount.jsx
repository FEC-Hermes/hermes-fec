import React from 'react';
import styled from 'styled-components';

const ReviewCount_Container = styled.div`
 display:flex;
 justify-content: space-between;
 font-size: 1.5rem;
 color: #0375ff;
`;

const Menu_Option = styled.select`
  width: 15rem;
  font-family: sans-serif;
}
`;
const ReviewCount = ({reviewCount}) => {
  return (
    <ReviewCount_Container>
      {reviewCount} reviews, sorted by
      <Menu_Option>
        <option>helpful</option>
        <option>newest</option>
        <option>relevance</option>
      </Menu_Option>
    </ReviewCount_Container>
  );
};

export default ReviewCount;