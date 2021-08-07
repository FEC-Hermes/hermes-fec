import React from 'react';

const BreakdownBarInactive = ({ value, max }) => {
  return (
    <svg width="235" height="20">
      <path d={`M
        0 5
        0 15
        220 15
        220 5
      `}
        fill="lightgray"
      />
      <path d={`M
          0 5
          0 15
          ${220 * value / max} 15
          ${220 * value / max} 5
        `}
        fill="darkGray"
      />
    </svg>
  );
};

export default BreakdownBarInactive;