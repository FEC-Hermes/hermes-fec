import React from 'react';
import styled from 'styled-components';

import StylesContext from '../contexts/StylesContext';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const Container = styled.main`
  display: flex;
  width: 340px;
  flex-wrap: wrap;
`;

const ImgFrame = styled.div`
  height: 75px;
  width:75px;
  margin: 3px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px #000;
  border: 2px solid #000;
`;

const Style = styled.div`
  width: 350px;
`;

const Img = styled.img`
  width: 120px;
`;

const SelectedIcon = styled.div`
  
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const StyleSelector = () => {

  const { allStyles, currStyle } = React.useContext(StylesContext);
  const [styles] = allStyles;
  const [selectedStyle, setCurrStyle] = currStyle;

  const onThumbClick = (style, id) => {

    const images = document.getElementsByClassName('styleThumb');
    Array.from(images).forEach(img => {
      img.parentNode.style.boxShadow = '0px 0px 4px #000';
      img.parentNode.style.border = '1px solid #000';
    });

    document.getElementById(id).parentNode.style.boxShadow = '0px 0px 6px #fff';
    document.getElementById(id).parentNode.style.border = '3px solid #fff';
    setCurrStyle(style);
  };

  return (
    <Container>
      <Style><b>STYLE &gt;</b>{ selectedStyle.name }</Style>
      {styles.map(style => (
        <ImgFrame key={ style.style_id }>
          <Img
            id={ style.style_id }
            className={ 'styleThumb' }
            src={ style.photos[0].thumbnail_url }
            onClick={ () => onThumbClick(style, style.style_id) }
          />
        </ImgFrame>
      ))}
    </Container>
  );
};

export default StyleSelector;