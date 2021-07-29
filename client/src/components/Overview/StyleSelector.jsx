import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StylesContext from '../contexts/StylesContext';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const Container = styled.main`
  display: flex;
  width: 325px;
  flex-wrap: wrap;

  border: 1px solid red;
`;

const ImgFrame = styled.div`
  height: 75px;
  width:75px;
  margin: 3px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Style = styled.div`
  width: 350px;
`;

const Img = styled.img`
  width: 120px;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const StyleSelector = () => {

  const { allStyles, currStyle } = React.useContext(StylesContext);
  const [styles] = allStyles;
  const [selectedStyle, setCurrStyle] = currStyle;

  return (
    <Container>
      <Style>STYLE &gt; { selectedStyle.name }</Style>
      {styles.map(style => (
        <ImgFrame key={ style.style_id }>
          <Img
            src={ style.photos[0].thumbnail_url }
            onClick={ () => setCurrStyle(style) }
          />
        </ImgFrame>
      ))}
    </Container>
  );
};

export default StyleSelector;