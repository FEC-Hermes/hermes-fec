import React from 'react';

const CharacteristicQuarters = (props) => {
  var gap = 2.5;
  var position = (props.characteristic.value - 1) * props.width / 4;
  return (
    <div>
      <div>
        {props.characteristic.name}
      </div>
      <svg id="" width={'100%'} height="15">
        <path id="char"
          d={`M
            0 0
            0 4
            ${props.width * 1 / 4 - gap} 4
            ${props.width * 1 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 1 / 4 + gap} 0
            ${props.width * 1 / 4 + gap} 4
            ${props.width * 2 / 4 - gap} 4
            ${props.width * 2 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 2 / 4 + gap} 0
            ${props.width * 2 / 4 + gap} 4
            ${props.width * 3 / 4 - gap} 4
            ${props.width * 3 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 3 / 4 + gap} 0
            ${props.width * 3 / 4 + gap} 4
            ${props.width * 4 / 4 - gap} 4
            ${props.width * 4 / 4 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="arrow"
          d={`M
            ${position} 15
            ${position + 10} 0
            ${position - 10} 0
            ${position} 15
          `}
          fill="green"
        />
      </svg>
      <div className="descriptors">
        <div className="decriptor low-descriptor">{props.characteristic.low}</div>
        <div className="decriptor balanced-descriptor">{props.characteristic.balanced}</div>
        <div className="decriptor high-descriptor">{props.characteristic.high}</div>
      </div>
    </div>
  )
}

export default CharacteristicQuarters;