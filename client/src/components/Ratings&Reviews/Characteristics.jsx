import React, { useState, useEffect } from 'react';
import CharacteristicQuarters from './CharacteristicQuarters.jsx';
import styled from 'styled-components';

const Characteristics_Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// Given the radial buttons and law of averages, must between 1 and 5
// Far left is "1", far right is "5"
// Dead center segment is "3"

const Characteristics = ({characteristics}) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    var width = document.getElementById('characteristics-container').offsetWidth;
    setWidth(width);
  });

  if (characteristics.Size) {
    var sizeCharacteristic = {
      id: 14,
      name: 'Size',
      value: Number(characteristics.Size.value),
      low: 'A Size Too Small',
      balanced: 'Perfect',
      high: 'A Size Too Wide'
    };
  }

  if (characteristics.Width) {
    var widthCharacteristic = {
      id: 15,
      name: 'Width',
      value: Number(characteristics.Width.value),
      low: 'Too Narrow',
      balanced: 'Perfect',
      high: 'Too Wide'
    };
  }

  if (characteristics.Comfort) {
    var comfortCharacteristic = {
      id: 16,
      name: 'Comfort',
      value: Number(characteristics.Comfort.value),
      low: 'Uncomfortable',
      balanced: 'Ok',
      high: 'Perfect'
    };
  }

  if (characteristics.Quality) {
    var qualityCharacteristic = {
      id: 17,
      name: 'Quality',
      value: Number(characteristics.Quality.value),
      low: 'Poor',
      balanced: 'What I Expected',
      high: 'Perfect'
    };
  }

  if (characteristics.Length) {
    var lengthCharacteristic = {
      id: 18,
      name: 'Length',
      value: Number(characteristics.Length.value),
      low: 'Runs Short',
      balanced: 'Perfect',
      high: 'Runs Long'
    };
  }

  if (characteristics.Fit) {
    var fitCharacteristic = {
      id: 19,
      name: 'Fit',
      value: Number(characteristics.Fit.value),
      low: 'Runs Tight',
      balanced: 'Perfect',
      high: 'Runs Long'
    };
  }

  return (
    <Characteristics_Container id="characteristics-container">
      {
        sizeCharacteristic
          ?
        <CharacteristicQuarters width={width} characteristic={sizeCharacteristic}/>
          :
        null
      }
      {
        widthCharacteristic
          ?
        <CharacteristicQuarters width={width} characteristic={widthCharacteristic} />
          :
        null
      }
      {
        comfortCharacteristic !== undefined
          ?
          <CharacteristicQuarters width={width} characteristic={comfortCharacteristic} />
          :
        null
      }
      {
        qualityCharacteristic !== undefined
          ?
          <CharacteristicQuarters width={width} characteristic={qualityCharacteristic} />
          :
        null
      }
      {
        lengthCharacteristic !== undefined
          ?
          <CharacteristicQuarters width={width} characteristic={lengthCharacteristic} />
          :
        null
      }
      {
        fitCharacteristic !== undefined
          ?
          <CharacteristicQuarters width={width} characteristic={fitCharacteristic} />
          :
        null
      }
    </Characteristics_Container >
  );
};

export default Characteristics;