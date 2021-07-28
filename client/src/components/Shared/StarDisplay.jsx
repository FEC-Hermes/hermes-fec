import React from 'react';
import Star from './Star.jsx';

// Use this to render your star ratings!!
// <StarDisplay rating={3.8} productId={12345} />
// You will need to pass in the rating as a prop for obvious reasons
// You will need to pass in the productId for the star's fill to display proper

function StarDisplay({rating}) {
  return (
    <div>
      <Star stars={rating} starId={Math.random()}/>
      <Star stars={rating - 1} starId={Math.random()}/>
      <Star stars={rating - 2} starId={Math.random()} />
      <Star stars={rating - 3} starId={Math.random()} />
      <Star stars={rating - 4} starId={Math.random()}/>
    </div>
  )
}

export default StarDisplay;