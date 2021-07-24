import React, { useState, useEffect } from 'react';
import Characteristic from './Characteristic.jsx';

const Characteristics = (props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    var width = document.getElementById('characteristics-container').offsetWidth;
    setWidth(width);
  });

  return (
    <div id="characteristics-container">
      <Characteristic width={width}/>
    </div>
  )
};

export default Characteristics;