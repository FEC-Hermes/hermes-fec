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
  position: absolute;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const StyleSelector = () => {

  const { allStyles, currStyle } = React.useContext(StylesContext);
  const [styles] = allStyles;
  const [selectedStyle, setCurrStyle] = currStyle;

  const onThumbClick = (style, id, i) => {

    const images = document.getElementsByClassName('styleThumb');
    const checkMarks = document.getElementsByClassName('check-mark');

    Array.from(images).forEach(img => {
      img.parentNode.style.boxShadow = '0px 0px 4px #000';
      img.parentNode.style.border = '1px solid #000';
    });

    Array.from(checkMarks).forEach(img => {
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
      {styles.map((style, i) => (
        <ImgFrame key={ style.style_id }>
          <Img
            id={ style.style_id }
            className={ 'styleThumb' }
            src={ style.photos[0].thumbnail_url }
            onClick={ () => onThumbClick(style, style.style_id, i) }
          />
          <SelectedIcon>
            <svg
              id={ `check-mark${i}` }
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 512 512"
              height="20px"
              width="20px"
              color="green"
              className="check-marks">
              <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
            </svg>
          </SelectedIcon>
        </ImgFrame>
      ))}
    </Container>
  );
};

export default StyleSelector;