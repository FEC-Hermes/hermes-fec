import React from 'react';
import StarDisplay from '../Shared/StarDisplay.jsx';
import Characteristics from './Characteristics.jsx';

const Ratings = (props) => {
  return (
    <div id="ratngs">
      <div id="final-rating">
        <div id="rating-display">3.5</div>
        <StarDisplay rating={3.8} productId={1} />
      </div>

      <StarDisplay rating={2.4} productId={2} />
      <StarDisplay rating={4.2} productId={3} />
      <StarDisplay rating={0} productId={4} />
      <StarDisplay rating={5} productId={5} />
      <Characteristics />
    </div>
  )
}

export default Ratings;