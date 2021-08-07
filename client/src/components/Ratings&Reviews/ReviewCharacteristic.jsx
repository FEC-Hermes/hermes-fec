import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

const DescriptorContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

const CharacteristicContainer = styled.div`
  width: 15%;
  text-align: center;
  justify-content: space-around;
`;


const ReviewCharacteristic = (props) => {
  const handleChange = (value) => {
    props.changeCharacteristic(value, props.characteristic.name);
  };
  return (
    <React.Fragment>
      <Label>{props.characteristic.name}</Label>
      <div>
        <DescriptorContainer>
          <CharacteristicContainer>
            <div>{props.characteristic.lowest}</div>
            <input type="radio" id={`${props.characteristic.keyName}-1`}
              value="1" name={props.characteristic.keyName}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </CharacteristicContainer>
          <CharacteristicContainer>
            <div>{props.characteristic.low}</div>
              <input type="radio" id={`${props.characteristic.keyName}-2`}
            value="2" name={props.characteristic.keyName}
            onChange={(e) => {
              handleChange(e.target.value, `${props.characteristic.name}`);
            }}
          />
          </CharacteristicContainer>
          <CharacteristicContainer>
            <div>{props.characteristic.mid}</div>
            <input type="radio" id={`${props.characteristic.keyName}-3`}
              value="3" name={props.characteristic.keyName}
              onChange={(e) => {
                handleChange(e.target.value, `${props.characteristic.name}`);
              }}
            />
          </CharacteristicContainer>
          <CharacteristicContainer>
            <div>{props.characteristic.high}</div>
            <input type="radio" id={`${props.characteristic.keyName}-4`}
              value="4" name={props.characteristic.keyName}
              onChange={(e) => {
                handleChange(e.target.value, `${props.characteristic.name}`);
              }}
            />
          </CharacteristicContainer>
          <CharacteristicContainer>
            <div>{props.characteristic.highest}</div>
            <input type="radio" id={`${props.characteristic.keyName}-5`}
              value="5" name={props.characteristic.keyName}
              onChange={(e) => {
                handleChange(e.target.value, `${props.characteristic.name}`);
              }}
            />
          </CharacteristicContainer>
        </DescriptorContainer>
      </div>
    </React.Fragment>
  );
};

export default ReviewCharacteristic;