import React from 'react';
import ReviewCharacteristic from './ReviewCharacteristic.jsx';

const ReviewCharacteristics = ({ characteristics, reviewMeta, changeCharacteristic}) => {
  return (
    <div>
      {
        characteristics.map((characteristic, i) =>
          reviewMeta.characteristics[characteristic.name]
            ?
          <ReviewCharacteristic key={i} characteristic={characteristic} changeCharacteristic={changeCharacteristic} />
            :
          null
        )
      }
    </div>
  );
};

export default ReviewCharacteristics;