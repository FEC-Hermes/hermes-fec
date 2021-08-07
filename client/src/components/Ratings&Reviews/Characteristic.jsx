import React from 'react';

const Characteristic = (props) => {
  var gap = 2.5;
  return (
    <div>
      <div>Characteristic</div>
      <svg id="" width={'100%'} height="20">
        <path id="char"
          d={`M
            0 0
            0 20
            ${props.width * 1 / 5 - gap} 20
            ${props.width * 1 / 5 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 1 / 5 + gap} 0
            ${props.width * 1 / 5 + gap} 20
            ${props.width * 2 / 5 - gap} 20
            ${props.width * 2 / 5 - gap} 0
          `}
          fill="lightgray"
         />
        <path id="char"
          d={`M
            ${props.width * 2 / 5 + gap} 0
            ${props.width * 2 / 5 + gap} 20
            ${props.width * 3 / 5 - gap} 20
            ${props.width * 3 / 5 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 3 / 5 + gap} 0
            ${props.width * 3 / 5 + gap} 20
            ${props.width * 4 / 5 - gap} 20
            ${props.width * 4 / 5 - gap} 0
          `}
          fill="lightgray"
        />
        <path id="char"
          d={`M
            ${props.width * 4 / 5 + gap} 0
            ${props.width * 4 / 5 + gap} 20
            ${props.width} 20
            ${props.width} 0
          `}
          fill="lightgray"
        />
      </svg>
      <div className="descriptors">
        <div className="low-descriptor">Bad</div>
        <div className="balanced-descriptor">Avg</div>
        <div className="high-descriptor">Good</div>
      </div>
    </div>
  )
}

export default Characteristic;