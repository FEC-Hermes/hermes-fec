import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


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

/////////////////////////////////////////////

const StyleSelector = ({ product_id }) => {

  const [styles, setStyles] = useState([]);

  useEffect(() => {
    getStyles(product_id);
  }, []);

  const getStyles = (product_id) => {
    if (product_id) {
      axios.get(`/products/${product_id}/styles`)
        .then(({ data }) => setStyles(data.results))
        .catch(err => console.log(err));
    }
  };

  return (
    <Container>
      <Style>STYLE &gt; { /* LINK TO STYLE */ }</Style>
      {styles.map(style => (
        <ImgFrame key={ style.style_id }>
          <Img src={ style.photos[0].thumbnail_url } />
        </ImgFrame>
      ))}
    </Container>
  );
};

export default StyleSelector;