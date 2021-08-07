import React from 'react';
import styled from 'styled-components';

const Descriptors = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Characteristic_Quarters_Container = styled.div`
  margin: 0rem 0;
`;

const Ptags = styled.p`
  font-size: ${props => props.size};
  margin-bottom: ${props => props.mb};
`;


const CharacteristicQuarters = (props) => {
  var gap = 2.5;
  var position = (props.characteristic.value - 1) * props.width / 4;
  return (
    <Characteristic_Quarters_Container>
      <Ptags size={'1.2rem'} mb={'0.5rem'}>
        {props.characteristic.name}
      </Ptags>
      <svg id="" width={'100%'} height="20">
        <path id="char"
          d={`M
            0 0
            0 8
            ${props.width * 1 / 4 - gap} 8
            ${props.width * 1 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 1 / 4 + gap} 0
            ${props.width * 1 / 4 + gap} 8
            ${props.width * 2 / 4 - gap} 8
            ${props.width * 2 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 2 / 4 + gap} 0
            ${props.width * 2 / 4 + gap} 8
            ${props.width * 3 / 4 - gap} 8
            ${props.width * 3 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 3 / 4 + gap} 0
            ${props.width * 3 / 4 + gap} 8
            ${props.width * 4 / 4 - gap} 8
            ${props.width * 4 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="arrow"
          d={`M
            ${position} 15
            ${position + 7} 0
            ${position - 7} 0
            ${position} 15
          `}
          fill="green"
        />
      </svg>
      <Descriptors>
        <div className="decriptor low-descriptor">{props.characteristic.low}</div>
        <div className="decriptor balanced-descriptor">{props.characteristic.balanced}</div>
        <div className="decriptor high-descriptor">{props.characteristic.high}</div>
      </Descriptors>
    </Characteristic_Quarters_Container>
  )
}

export default CharacteristicQuarters;