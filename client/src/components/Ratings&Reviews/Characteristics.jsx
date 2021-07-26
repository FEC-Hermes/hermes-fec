import React, { useState, useEffect } from 'react';
import CharacteristicQuarters from './CharacteristicQuarters.jsx';

// Given the radial buttons and law of averages, must between 1 and 5
// Far left is "1", far right is "5"
// Dead center segment is "3"

const Characteristics = (props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    var width = document.getElementById('characteristics-container').offsetWidth;
    setWidth(width);
  });

  var size = {
    name: 'Size',
    value: 2.6,
    low: 'A Size Too Small',
    balanced: 'Perfect',
    high: 'A Size Too Wide'
  };

  var widthCharacteristic = {
    name: 'Width',
    value: 3.6,
    low: 'Too Narrow',
    balanced: 'Perfect',
    high: 'Too Wide'
  };

  var comfort = {
    name: 'Comfort',
    value: 1.75,
    low: 'Uncomfortable',
    balanced: 'Ok',
    high: 'Perfect'
  };

  var quality = {
    name: 'Quality',
    value: 5,
    low: 'Poor',
    balanced: 'What I Expected',
    high: 'Perfect'
  };

  var length = {
    name: 'Length',
    value: 1,
    low: 'Runs Short',
    balanced: 'Perfect',
    high: 'Runs Long'
  };

  var fit = {
    name: 'Fit',
    value: 3,
    low: 'Runs Tight',
    balanced: 'Perfectly Balanced, As All Things Should Be',
    high: 'Runs Long'
  };

  return (
    <div id="characteristics-container">
      <CharacteristicQuarters width={width} characteristic={size}/>
      <br />
      <CharacteristicQuarters width={width} characteristic={widthCharacteristic} />
      <br />
      <CharacteristicQuarters width={width} characteristic={comfort} />
      <br />
      <CharacteristicQuarters width={width} characteristic={quality} />
      <br />
      <CharacteristicQuarters width={width} characteristic={length} />
      <br />
      <CharacteristicQuarters width={width} characteristic={fit} />
    </div>
  );
};

export default Characteristics;