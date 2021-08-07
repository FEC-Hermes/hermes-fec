import React, {useState, useEffect} from 'react';
import ReviewCountAndSort from './ReviewCountAndSort.jsx';
import ReviewList from './ReviewList.jsx';
import AdditionalReviewOptions from './AdditionalReviewOptions.jsx';
import ProductContext, { reviews, reviewMeta } from '../contexts/ProductContext.js';
import axios from 'axios';
import styled from 'styled-components';

const Reviews_Container = styled.div`
  margin: 3rem 0 0 0rem;
  width: 920px;
`;

const Reviews = ({ reviewFilter, filterSignature, toggleModalShown, setReviewImgUrl}) => {
  const [sortType, setSortType] = useState('relevant');
  const [displayCount, setDisplayCount] = useState(2);
  const [filter, setReviewFilter] = useState({});

  // useEffect(() => {
  //   console.log('Change detected');
  // }, [filter, reviewFilter]);

  return (
    <ProductContext.Consumer>
      {({reviews, setReviews, reviewMeta}) => {
        var reviewCount = 0;
        for (var rating in reviewMeta.ratings) {
          reviewCount += Number(reviewMeta.ratings[rating]);
        }

        var getNextReviewPage = () => {
          var newDisplayLimit = displayCount + 2;
          setDisplayCount(newDisplayLimit);
        };

        var changeSortType = (sortType) => {
          var updatedReviews = reviews;
          updatedReviews.results = [];

          axios.get(`/reviews/${reviews.product}/${sortType}/1/${reviewCount}`)
            .then(({ data }) => {
              setReviews(data);
              setSortType(sortType);
              setDisplayCount(2);
            });
        };

        return (
          <Reviews_Container>
            <ReviewCountAndSort reviewCount={reviewCount}
              changeSortType={changeSortType}
            />
            <ReviewList reviews={reviews.results}
              reviewFilter={reviewFilter}
              filterSignature={filterSignature}
              sortType={sortType}
              displayCount={displayCount}
              setReviewImgUrl={setReviewImgUrl}
            />
            <AdditionalReviewOptions getNextReviewPage={getNextReviewPage}
              toggleModalShown={toggleModalShown}
            />
          </Reviews_Container>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default Reviews;