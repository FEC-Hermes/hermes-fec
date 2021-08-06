import React from 'react';
import styled from 'styled-components';

const BreakdownFilterContainer = styled.div`
   margin: 1rem 0 0 2rem;
   cursor: pointer;
`;

const BreakdownFilterDisplay = ({reviewFilter, clearReviewFilter}) => {
  const handleClick = () => {
    clearReviewFilter();
  };

  return (
    <BreakdownFilterContainer>
      {reviewFilter.active ? <div>Rating Breakdown</div> : null}
      {reviewFilter.active ? <div>Displaying</div> : null}
      {reviewFilter.stars[5] ? <div>5 Star Reviews</div> : null}
      {reviewFilter.stars[4] ? <div>4 Star Reviews</div> : null}
      {reviewFilter.stars[3] ? <div>3 Star Reviews</div> : null}
      {reviewFilter.stars[2] ? <div>2 Star Reviews</div> : null}
      {reviewFilter.stars[1] ? <div>1 Star Reviews</div> : null}
      {reviewFilter.active ? <div onClick={() => {handleClick()}}>Remove all filters</div> : null}
    </BreakdownFilterContainer>
  );
}

export default BreakdownFilterDisplay;