import React, { useState } from 'react';
import NewReviewStarDisplay from '../Shared/NewReviewStarDisplay.jsx';

import axios from 'axios';
import styled from 'styled-components';

const ReviewForm = styled.div`
  display:grid;
  grid-row-gap: 0.1rem;
  padding: 1rem;
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

  const handleCharacteristicChange = (value, characteristic) => {
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

  return (
    <ReviewForm >
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
        {
          reviewMeta.characteristics.Size
            ?
            <React.Fragment>
              <label>Size</label>
              <div>
                <label>A size too small</label>
                <input type="radio" id="size-1" value="1" name="size"
                  onChange={(e) => {
                    handleCharacteristicChange(e.target.value, 'Size');
                  }}/>
                <label>½ a size too small</label>
                <input type="radio" id="size-2" value="2" name="size"
                  onChange={(e) => {
                    handleCharacteristicChange(e.target.value, 'Size');
                  }}/>
                <label>Perfect</label>
                <input type="radio" id="size-3" value="3" name="size"
                  onChange={(e) => {
                    handleCharacteristicChange(e.target.value, 'Size');
                  }}/>
                <label>½ a size too big</label>
                <input type="radio" id="size-4" value="4" name="size"
                  onChange={(e) => {
                    handleCharacteristicChange(e.target.value, 'Size');
                  }}/>
                <label>A size too wide</label>
                <input type="radio" id="size-5" value="5" name="size"
                  onChange={(e) => {
                    handleCharacteristicChange(e.target.value, 'Size');
                  }}/>
              </div>
            </React.Fragment>
            :
            null
        }
        {
          reviewMeta.characteristics.Width
            ?
            <React.Fragment>
              <label>Width</label>
              <div>
                <label>Too narrow</label>
                <input type="radio" id="width-1" value="1" name="width"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Width');
                  }}/>
                <label>Slightly narrow</label>
                <input type="radio" id="width-2" value="2" name="width"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Width');
                  }}/>
                <label>Perfect</label>
                <input type="radio" id="width-3" value="3" name="width"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Width');
                  }}/>
                <label>Slightly wide</label>
                <input type="radio" id="width-4" value="4" name="width"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Width');
                  }}/>
                <label>Too wide</label>
                <input type="radio" id="width-5" value="5" name="width"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Width');
                  }}/>
              </div>
            </React.Fragment>
            :
            null
        }
        {
          reviewMeta.characteristics.Comfort
            ?
            <React.Fragment>
              <label>Comfort</label>
              <div>
                <label>Poor</label>
                <input type="radio" id="comfort-1" value="1" name="comfort"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Comfort');
                  }}/>
                <label>Slightly uncomfortable</label>
                <input type="radio" id="comfort-2" value="2" name="comfort"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Comfort');
                  }}/>
                <label>Ok</label>
                <input type="radio" id="comfort-3" value="3" name="comfort"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Comfort');
                  }}/>
                <label>Comfortable</label>
                <input type="radio" id="comfort-4" value="4" name="comfort"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Comfort');
                  }}/>
                <label>Perfect</label>
                <input type="radio" id="comfort-5" value="5" name="comfort"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Comfort');
                  }}/>
              </div>
            </React.Fragment>
            :
            null
        }
        {
          reviewMeta.characteristics.Quality
            ?
            <React.Fragment>
              <label>Quality</label>
              <div>
                <label>Poor</label>
                <input type="radio" id="quality-1" value="1" name="quality"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Quality');
                  }}/>
                <label>Below average</label>
                <input type="radio" id="quality-2" value="2" name="quality"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Quality');
                  }}/>
                <label>What I expected</label>
                <input type="radio" id="quality-3" value="3" name="quality"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Quality');
                  }}/>
                <label>Pretty great</label>
                <input type="radio" id="quality-4" value="4" name="quality"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Quality');
                  }}/>
                <label>Perfect</label>
                <input type="radio" id="quality-5" value="5" name="quality"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Quality');
                  }}/>
              </div>
            </React.Fragment>
            :
            null
        }
        {
          reviewMeta.characteristics.Length
            ?
            <React.Fragment>
              <label>Length</label>
              <div>
                <label>Runs Short</label>
                <input type="radio" id="length-1" value="1" name="length"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Length');
                  }}/>
                <label>Runs slightly short</label>
                <input type="radio" id="length-2" value="2" name="length"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Length');
                  }}/>
                <label>Perfect</label>
                <input type="radio" id="length-3" value="3" name="length"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Length');
                  }}/>
                <label>Runs slightly long</label>
                <input type="radio" id="length-4" value="4" name="length"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Length');
                  }}/>
                <label>Runs long</label>
                <input type="radio" id="length-5" value="5" name="length"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Length');
                  }}/>
              </div>
            </React.Fragment>
            :
            null
        }
        {
          reviewMeta.characteristics.Fit
            ?
            <React.Fragment>
              <label>Fit</label>
              <div>
                <label>Runs tight</label>
                <input type="radio" id="fit-1" value="1" name="fit"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Fit');
                  }}/>
                <label>Runs slightly tight</label>
                <input type="radio" id="fit-2" value="2" name="fit"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Fit');
                  }}/>
                <label>Perfect</label>
                <input type="radio" id="fit-3" value="3" name="fit"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Fit');
                  }}/>
                <label>Runs slightly long</label>
                <input type="radio" id="fit-4" value="4" name="fit"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Fit');
                  }}/>
                <label>Runs long</label>
                <input type="radio" id="fit-5" value="5" name="fit"
                  onChange={(e) =>  {
                    handleCharacteristicChange(e.target.value, 'Fit');
                  }}/>
              </div>
            </React.Fragment>
            :
            null
        }
      </Rate_Characteristics_Container>
      <Button type="button" onClick={() => {
        submitNewReview();
      }} >Submit Review!!</Button>
    </ReviewForm>
  );
};

export default NewReviewForm;