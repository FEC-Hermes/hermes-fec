import React, { useState, useEffect } from 'react';
import CharacteristicQuarters from './CharacteristicQuarters.jsx';

// Given the radial buttons and law of averages, must between 1 and 5
// Far left is "1", far right is "5"
// Dead center segment is "3"

const Characteristics = (props) => {
  const [width, setWidth] = useState(0);
  const [characteristics, setCharacteristics] = useState({
    "Size": {
      "id": 14,
      "value": "4.0000"
    },
    "Width": {
      "id": 15,
      "value": "3.5000"
    },
    "Comfort": {
      "id": 16,
      "value": "4.0000"
    },
    "Quality": {
      "id": 17,
      "value": "4.3500"
    },
    "Length": {
      "id": 18,
      "value": "3.5000"
    },
    "Fit": {
      "id": 19,
      "value": "3.0000"
    }
  });

  useEffect(() => {
    var width = document.getElementById('characteristics-container').offsetWidth;
    setWidth(width);
  });

  var size = {
    name: 'Size',
    value: Number(characteristics.Size.value),
    low: 'A Size Too Small',
    balanced: 'Perfect',
    high: 'A Size Too Wide'
  };

  var widthCharacteristic = {
    name: 'Width',
    value: Number(characteristics.Width.value),
    low: 'Too Narrow',
    balanced: 'Perfect',
    high: 'Too Wide'
  };

  var comfort = {
    name: 'Comfort',
    value: Number(characteristics.Comfort.value),
    low: 'Uncomfortable',
    balanced: 'Ok',
    high: 'Perfect'
  };

  var quality = {
    name: 'Quality',
    value: Number(characteristics.Quality.value),
    low: 'Poor',
    balanced: 'What I Expected',
    high: 'Perfect'
  };

  var length = {
    name: 'Length',
    value: Number(characteristics.Length.value),
    low: 'Runs Short',
    balanced: 'Perfect',
    high: 'Runs Long'
  };

  var fit = {
    name: 'Fit',
    value: Number(characteristics.Fit.value),
    low: 'Runs Tight',
    balanced: 'Perfect',
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