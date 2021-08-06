import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';
import moment from 'moment';
import styled from 'styled-components';

const ReviewHeaderContainer = styled.div`
  display: grid;
`;

const HeaderStarDisplay = styled.div`
  grid-column: 1;
`;

const ReviewUserAndTimestampContainer = styled.h3`
  grid-column: 2;
  text-align: right;
  padding: 0px;
  margin: 0px;
`;

const ReviewHeader = (props) => {
  return (
    <ReviewHeaderContainer>
      <HeaderStarDisplay>
        <StarDisplay rating={props.rating} productId={props.productId}/>
      </HeaderStarDisplay>
      <ReviewUserAndTimestampContainer>
        {`${props.reviewer_name}, ${moment(props.date).format('LL')}`}
      </ReviewUserAndTimestampContainer>
    </ReviewHeaderContainer>
  );
};

export default ReviewHeader;