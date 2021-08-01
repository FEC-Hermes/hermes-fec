import React, { useEffect } from 'react';
import styled from 'styled-components';

import StylesContext from '../contexts/StylesContext';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const Container = styled.main`
  display: flex;
  width: 370px;
  flex-wrap: wrap;
`;

const OuterThumbContainer = styled.div`
  height: 80px;
  width: 80px;
  margin: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Style = styled.div`
  width: 350px;
  margin-bottom: 5px;
`;

const ThumbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  height: 80px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 4px #000;
  border: 2px solid #000;
`;

const Img = styled.img`
  width: 200px;
`;

const SelectedIcon = styled.svg`
  position: absolute;
  top: -7px;
  right: -7px;

  visibility: hidden;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const StyleSelector = () => {

  const { allStyles, currStyle } = React.useContext(StylesContext);
  const [styles] = allStyles;
  const [selectedStyle, setCurrStyle] = currStyle;


  const onThumbClick = (style, imgIndex) => {

    const checkMarks = document.getElementsByClassName('check-marks');

    Array.from(checkMarks).forEach(icon => {
      icon.style.visibility = 'hidden';
    });

    document.getElementById(`check-mark${imgIndex}`).style.visibility = 'visible';
    setCurrStyle(style);
  };

  useEffect(() => {
    onThumbClick(selectedStyle, 0);
  }, []);

  return (
    <Container>
      <Style><b>STYLE &gt;</b>{ selectedStyle.name }</Style>
      {styles.map((style, i) => (
        <OuterThumbContainer key={ style.style_id }>
          <ThumbContainer>
            <Img
              id={ style.style_id }
              className={ 'styleThumb' }
              src={ style.photos[0].thumbnail_url }
              onClick={ () => onThumbClick(style, i) }
            />
          </ThumbContainer>
          <SelectedIcon
            id={ `check-mark${i}` }
            className="check-marks"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 512 512"
            height="20px"
            width="20px"
            color="green">
            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
          </SelectedIcon>
        </OuterThumbContainer>
      ))}
    </Container>
  );
};

export default StyleSelector;