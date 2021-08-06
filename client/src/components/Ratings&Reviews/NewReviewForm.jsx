import React, { useState } from 'react';
import NewReviewStarDisplay from '../Shared/NewReviewStarDisplay.jsx';
import ReviewCharacteristics from './ReviewCharacteristics.jsx';


import axios from 'axios';
import styled from 'styled-components';

const ReviewForm = styled.main`
  display:grid;
  grid-row-gap: 0.1rem;
  padding: 1rem;
  position: fixed;
  z-index: 200;
  background: #fff;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 8px;
`;

const Recommend_Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 22rem;
`;

const UploadPictureContianer = styled.div`
   display: flex;
   flex-direction: column;
`;

const Rate_Characteristics_Container = styled.div`
    display: grid;
    grid-row-gap: 0.7rem;
    margin-bottom:1rem;
`;

const Button = styled.button`
  background-color: white;
  height: 2rem;
  border: 1px solid black;
 `;


// Hela's Combat Garb: https://i.imgur.com/Q5kWc7n.jpg
// Samus' Power Suit: https://i.imgur.com/dtjVxno.jpg
// Dragonborn's Iron Helmet: https://i.imgur.com/j3uT1ND.jpg
// Marty McFly's Vest: https://i.imgur.com/VDC9duU.jpg
// Superman's Outfit: https://i.imgur.com/B5kTEPt.jpg

const NewReviewForm = ({reviewMeta, productName}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState(['', '', '', '', '']);
  const [characteristics, setCharacteristics] = useState({});

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleRecommendedChange = (e) => {
    setRecommend(e.target.value);
  };

  const handlePictureChange = (photoIndex, value) => {
    var photoArray = photos.slice();
    photoArray[photoIndex] = value;
    // console.log('Photo array:');
    // console.log(photoArray);
    setPhotos(photoArray);
    // console.log(photos);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  var characteristicsOptions = [{
    keyName: 'size',
    name: 'Size',
    lowest: 'A size too small',
    low: '½ a size too small',
    mid: 'Perfect',
    high: '½ a size too big',
    highest: 'A size too wide'
  },
  {
    keyName: 'width',
    name: 'Width',
    lowest: 'Too narrow',
    low: 'Slightly narrow',
    mid: 'Perfect',
    high: 'Slightly wide',
    highest: 'Too wide'
  },
  {
    keyName: 'comfort',
    name: 'Comfort',
    lowest: 'Uncomfortable',
    low: 'Slightly uncomfortable',
    mid: 'Ok',
    high: 'Comfortable',
    highest: 'Perfect'
  },
  {
    keyName: 'quality',
    name: 'Quality',
    lowest: 'Below average',
    low: '½ a size too small',
    mid: 'What I expected',
    high: 'Pretty great',
    highest: 'Perfect'
  },
  {
    keyName: 'length',
    name: 'Length',
    lowest: 'Runs Short',
    low: 'Runs slightly short',
    mid: 'Perfect',
    high: 'Runs slightly long',
    highest: 'Runs long'
  },
  {
    keyName: 'fit',
    name: 'Fit',
    lowest: 'Runs tight',
    low: 'Runs slightly tight',
    mid: 'Perfect',
    high: 'Runs slightly long',
    highest: 'Runs long'
  }];

  const changeCharacteristic = (value, characteristic) => {
    var chars = characteristics;
    chars[reviewMeta.characteristics[characteristic].id] = Number(value);
    setCharacteristics(chars);
  };

  const submitNewReview = () => {
    var submissionArray = [];
    photos.forEach(photoURL => {
      if (photoURL !== '') {
        submissionArray.push(photoURL);
      }
    })
    var reviewData = {
      product_id: Number(reviewMeta.product_id),
      rating: rating,
      summary: summary,
      body: body,
      recommend: Boolean(recommend),
      name: username,
      email: email,
      photos: submissionArray,
      characteristics: characteristics
    };

    // console.log(`You are submitting the data:`);
    // console.log(reviewData);

    axios.post(`/reviews/`, reviewData)
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log('An error is triggered client side');
        console.error('Error:', error);
      });

  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ReviewForm onClick={(e) => {handleClick(e)}}>

      <h3>Write Your Review</h3>
      <h4>About the {productName}</h4>
      <NewReviewStarDisplay rating={rating} hoverRating={hoverRating}
        setRating={setRating} setHoverRating={setHoverRating}/>
      <label>Summary</label>
      <input type="text" onChange={(e) => {handleSummaryChange(e)}}/>
      <br />
      <label>Body</label>
      <input type="text" onChange={(e) => { handleBodyChange(e) }} />
      <br />
      <Recommend_Container>
        <p>Do you recommend this product?</p>
        <input type="radio" id="recommend-true" name="recommend" value="true"
          onChange={(e) => {
            handleRecommendedChange(e);
          }}
        />
        <label htmlFor="recommend-true">Yes</label>

        <input type="radio" id="recommend-false" name="recommend" value="false"
          onChange={(e) => {
            handleRecommendedChange(e);
          }}/>
        <label htmlFor="recommend-false">No</label>
      </Recommend_Container>
      <br />
      <UploadPictureContianer>
        <div>Upload Up To 5 Pictures of the Product!</div>
        <label>Picture 1</label>
        <input type="text" onChange={(e) => handlePictureChange(0, e.target.value)}/>
        {
          photos[0] !== ''
            ?
            <React.Fragment>
              <label>Picture 2</label>
              <input type="text" onChange={(e) => handlePictureChange(1, e.target.value)}/>
            </React.Fragment>
            :
            null
        }
        {
          photos[1] !== ''
            ?
            <React.Fragment>
              <label>Picture 3</label>
              <input type="text" onChange={(e) => handlePictureChange(2, e.target.value)} />
            </React.Fragment>
            :
            null
        }
        {
          photos[2] !== ''
            ?
            <React.Fragment>
              <label>Picture 4</label>
              <input type="text" onChange={(e) => handlePictureChange(3, e.target.value)}/>
            </React.Fragment>
            :
            null
        }
        {
          photos[3] !== ''
            ?
            <React.Fragment>
              <label>Picture 5</label>
              <input type="text" onChange={(e) => handlePictureChange(4, e.target.value)} />
            </React.Fragment>
            :
            null
        }
      </UploadPictureContianer>
      <label>Name</label>
      <input type="text" onChange={(e) => { handleUsernameChange(e) }} />
      <br />
      <label>Email</label>
      <input type="text" onChange={(e) => { handleEmailChange(e) }} />
      <Rate_Characteristics_Container>
        <div>Rate These Characteristics</div>
        <ReviewCharacteristics characteristics={characteristicsOptions}
          changeCharacteristic={changeCharacteristic}
          reviewMeta={reviewMeta}
        />
      </Rate_Characteristics_Container>
      <Button type="button" onClick={() => {
        submitNewReview();
      }} >Submit Review!!</Button>
    </ReviewForm>
  );
};

export default NewReviewForm;