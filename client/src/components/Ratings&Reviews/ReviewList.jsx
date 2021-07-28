import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {
  var reviews = [
    {
      "review_id": 5,
      "rating": 5,
      "summary": "I'm enjoying wearing these shades so much that I haven't removed them from my face in 3 days and I made an account just to recommend them to everyone on the planet!",
      "recommend": false,
      "response": "If you are enjoying the shades so much, why didn't you actually recommend them?! Are we overthinking this or do you not actually like the shades?! HIT THE RECOMMEND BUTTON!!",
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "bittersweet",
      "helpfulness": 5,
      "photos": [
        {
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        }
      ]
    },
    {
      "review_id": 6,
      "rating": 3,
      "summary": "I'm kind of enjoying wearing these shades",
      "recommend": true,
      "response": null,
      "body": "This reminds me of my grandma's shades but they're coming back in style",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 9,
      "photos": [
        {
          "id": 3,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        }
      ]
    },
  ];

  const [reviewsShown, updateReviewsShown] = useState([reviews[0], reviews[1]]);


  var updateReviews = (reviewsShownCount) => {
    reviewsShown = [];
    var reviewToAdd = 0;
    while (reviewsShown.length < reviewsShownCount) {
      reviewsShown.push(reviews[reviewToAdd]);
    }
  };

  return (
    <div>
      {
        reviewsShown.map(review => {
          return <Review key={review.review_id} review={review}/>;
        })
      }
    </div>
  );
};

export default ReviewList;