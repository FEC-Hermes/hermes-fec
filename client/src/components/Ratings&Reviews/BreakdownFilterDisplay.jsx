import React from 'react';

const BreakdownFilterDisplay = ({reviewFilter, clearReviewFilter}) => {
  const handleClick = () => {
    clearReviewFilter();
  };

  return (
    <div>
      {reviewFilter.active ? <div>Rating Breakdown</div> : null}
      {reviewFilter.active ? <div>Displaying</div> : null}
      {reviewFilter.stars[5] ? <div>5 Star Reviews</div> : null}
      {reviewFilter.stars[4] ? <div>4 Star Reviews</div> : null}
      {reviewFilter.stars[3] ? <div>3 Star Reviews</div> : null}
      {reviewFilter.stars[2] ? <div>2 Star Reviews</div> : null}
      {reviewFilter.stars[1] ? <div>1 Star Reviews</div> : null}
      {reviewFilter.active ? <div onClick={() => {handleClick()}}>Remove all filters</div> : null}
    </div>
  );
}

export default BreakdownFilterDisplay;