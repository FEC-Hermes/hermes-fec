import React from 'react';
import Star from './Star.jsx';

// Use this to render your star ratings!!
// <StarDisplay rating={3.8} productId={12345} />
// You will need to pass in the rating as a prop for obvious reasons
// You will need to pass in the productId for the star's fill to display proper

function StarDisplay(props) {
  return (
    <div>
      <Star stars={props.rating} starId={`1-${props.productId}-${Math.random()}`}/>
      <Star stars={props.rating - 1} starId={`2-${props.productId}-${Math.random()}`}/>
      <Star stars={props.rating - 2} starId={`3-${props.productId}-${Math.random()}`} />
      <Star stars={props.rating - 3} starId={`4-${props.productId}-${Math.random()}`} />
      <Star stars={props.rating - 4} starId={`5-${props.productId}-${Math.random()}`}/>
    </div>
  )
}

export default StarDisplay;