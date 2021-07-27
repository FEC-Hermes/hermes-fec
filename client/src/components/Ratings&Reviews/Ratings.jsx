import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import Characteristics from './Characteristics.jsx';

const Ratings = (props) => {


  return (
    <div id="ratings">
      <div id="average-display">
        <div id="rating-display">3.5</div>
        <StarDisplay rating={3.8} productId={1} />
      </div>
      <PercentRecommended />
      <Characteristics />
    </div>
  );
};

export default Ratings;