import React from 'react';
import AverageDisplay from './AverageDisplay.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Characteristics from './Characteristics.jsx';

const Ratings = (props) => {


  return (
    <div id="ratings">
      <AverageDisplay/>
      <PercentRecommended />
      <RatingBreakdown />
      <Characteristics />
    </div>
  );
};

export default Ratings;