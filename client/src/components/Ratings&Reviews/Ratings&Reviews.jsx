import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styled from 'styled-components';

const Ratings_and_reviews_container = styled.div`
  display: flex;
  background-color: whitesmoke;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
 `;

const RatingsAndReviews = ({reviews, reviewMeta}) => {
  return (
    <div id="rating-review">
      <h1 id="ratings-and-reviews-title">Ratings & Reviews</h1>
      <Ratings_and_reviews_container>
        <Ratings />
        <Reviews />
      </Ratings_and_reviews_container>
    </div>
  );
};

export default RatingsAndReviews;