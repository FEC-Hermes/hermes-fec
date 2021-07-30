import React, { useState } from 'react';
import NewReviewStarDisplay from '../Shared/NewReviewStarDisplay.jsx';

const NewReviewForm = ({productId}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [summary, setSummary] = useState({summary: ''});
  const [body, setBody] = useState({body: ''});
  const [recommend, setRecommend] = useState({recommend: false});
  const [username, setUsername] = useState({username: ''});
  const [email, setEmail] = useState({email: ''});
  const [photoUrls, setPhotoUrls] = useState({photoUrls: []});
  const [characteristics, setCharacteristics] = useState({});

  const handleSummaryChange = (e) => {
    setSummary({summary: e.target.value});
  };

  const handleBodyChange = (e) => {
    setBody({ body: e.target.value });
  };

  const handleRecommendedChange = (e) => {
    setRecommend({ recommended: e.target.value });
  };

  const handleUsernameChange = (e) => {
    setUsername({ username: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail({ email: e.target.value });
  };

  const handleCharacteristicChange = (value, characteristic) => {
    var chars = characteristics;
    chars[characteristic] = value;
    setCharacteristics(chars);
    console.log(characteristics);
  };

  return (
    <form >
      <NewReviewStarDisplay rating={rating} hoverRating={hoverRating}
        setRating={setRating} setHoverRating={setHoverRating}/>
      <label>Summary</label>
      <input type="text" onChange={(e) => {handleSummaryChange(e)}}/>
      <br />
      <label>Body</label>
      <input type="text" onChange={(e) => { handleBodyChange(e) }} />
      <br />
      <div>
        <div>Do you recommend this product?</div>
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
      </div>
      <br />
      <label>1mage 1</label>
      <label>Name</label>
      <input type="text" onChange={(e) => { handleUsernameChange(e) }} />
      <br />
      <label>Email</label>
      <input type="text" onChange={(e) => { handleEmailChange(e) }} />
      <div>
        <div>Rate These Characteristics</div>
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
      </div>
    </form>
  );
};

export default NewReviewForm;