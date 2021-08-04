import React, {useState, useEffect} from 'react';
import ReviewCountAndSort from './ReviewCountAndSort.jsx';
import ReviewList from './ReviewList.jsx';
import AdditionalReviewOptions from './AdditionalReviewOptions.jsx';
import ProductContext from '../contexts/ProductContext.js';
import axios from 'axios';

const Reviews = ({reviewFilter, filterSignature}) => {
  const [sortType, setSortType] = useState('relevant');
  const [displayCount, setDisplayCount] = useState(2);
  const [filter, setReviewFilter] = useState({});

  useEffect(() => {
    console.log('Change detected');
  }, [filter, reviewFilter]);

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
          // var nextPage = pageNumber + 1;
          // axios.get(`/reviews/${reviews.product}/${sortType}/${nextPage}/2`)
          //   .then(({ data }) => {
          //     var updatedReviews = reviews;
          //     data.results.forEach(review => {
          //       updatedReviews.results.push(review);
          //     });
          //     setReviews(updatedReviews);
          //     setDisplayCount(nextPage);
          //   });
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
          <div id="reviews">
            <ReviewCountAndSort reviewCount={reviewCount}
              changeSortType={changeSortType}
            />
            <ReviewList reviews={reviews.results}
              reviewFilter={reviewFilter}
              filterSignature={filterSignature}
              sortType={sortType}
              displayCount={displayCount}
            />
            <AdditionalReviewOptions getNextReviewPage={getNextReviewPage}/>
          </div>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default Reviews;