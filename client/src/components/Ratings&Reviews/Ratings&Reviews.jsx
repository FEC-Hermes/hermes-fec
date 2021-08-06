import React, {useState, useEffect} from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styled from 'styled-components';

const Ratings_and_reviews_container = styled.div`
  display: flex;
  background-color: whitesmoke;
  padding-bottom: 4rem;
  margin-bottom: 2rem;
 `;

const RatingsAndReviews = () => {
  const [reviewFilter, setReviewFilter] = useState({
    active: false,
    stars: {
      5: false,
      4: false,
      3: false,
      2: false,
      1: false
    }
  });

  const [filterSignature, setFilterSignature] = useState(JSON.stringify(reviewFilter));

  var updateReviewFilter = (rating) => {
    var newFilterSettings = reviewFilter;
    newFilterSettings.stars[rating] = !newFilterSettings.stars[rating];
    newFilterSettings.active = false;
    for (var star in newFilterSettings.stars) {
      if (newFilterSettings.stars[star] === true) {
        newFilterSettings.active = true;
      }
    }
    // console.log('Obviously updating filter from', reviewFilter);
    setReviewFilter(newFilterSettings);
    setFilterSignature(JSON.stringify(reviewFilter));
    // console.log('To', reviewFilter);
  };

  var clearReviewFilter = () => {
    var newFilterSettings = {
      active: false,
      stars: {
        5: false,
        4: false,
        3: false,
        2: false,
        1: false
      }
    };
    setReviewFilter(newFilterSettings);
    setFilterSignature(JSON.stringify(reviewFilter));
  };

  return (
    <div id="rating-review">
      <h1 id="ratings-and-reviews-title">Ratings & Reviews</h1>
      <Ratings_and_reviews_container>
        <Ratings  reviewFilter={reviewFilter} updateReviewFilter={updateReviewFilter}
          clearReviewFilter={clearReviewFilter}/>
        <Reviews reviewFilter={reviewFilter} filterSignature={filterSignature} />
      </Ratings_and_reviews_container>
    </div>
  );
};

export default RatingsAndReviews;