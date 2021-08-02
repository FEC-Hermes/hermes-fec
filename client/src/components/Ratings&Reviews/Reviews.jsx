import React, {useState} from 'react';
import ReviewCountAndSort from './ReviewCountAndSort.jsx';
import ReviewList from './ReviewList.jsx';
import AdditionalReviewOptions from './AdditionalReviewOptions.jsx';
import ProductContext from '../contexts/ProductContext.js';
import axios from 'axios';

const Reviews = ({reviewFilter}) => {
  const [sortType, setSortType] = useState('relevant');
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <ProductContext.Consumer>
      {({reviews, setReviews, reviewMeta}) => {
        var reviewCount = 0;
        for (var rating in reviewMeta.ratings) {
          reviewCount += Number(reviewMeta.ratings[rating]);
        }

        var changeSortType = (sortType) => {
          var pageNumber = 1;

          var updatedReviews = reviews;
          updatedReviews.results = [];

          axios.get(`/reviews/${reviews.product}/${sortType}/${pageNumber}/2`)
          .then(({ data }) => {
            setReviews(data);
          });
          setSortType(sortType);
          setPageNumber(1);
        };

        var getNextReviewPage = () => {
          var nextPage = pageNumber + 1;
          axios.get(`/reviews/${reviews.product}/${sortType}/${nextPage}/2`)
            .then(({ data }) => {
              var updatedReviews = reviews;
              data.results.forEach(review => {
                updatedReviews.results.push(review);
              });
              setReviews(updatedReviews);
              setPageNumber(nextPage);
            });
        };

        return (
          <div id="reviews">
            <ReviewCountAndSort reviewCount={reviewCount}
              changeSortType={changeSortType}
            />
            <ReviewList reviews={reviews.results} reviewFilter={reviewFilter}/>
            <AdditionalReviewOptions getNextReviewPage={getNextReviewPage}/>
          </div>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default Reviews;