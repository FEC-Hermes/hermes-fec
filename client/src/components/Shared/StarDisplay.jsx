import React from 'react';
import Star from './Star.jsx';

// Do NOT use this component to display your ratings
// Non-Ratings and Reviews Widgets should use <StarAverageRating/> !!!

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