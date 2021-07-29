import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DisplayImage from './DisplayImage.jsx';
import VerticalThumbs from './VerticalThumbs.jsx';

// import StylesContext from '../../contexts/StylesContext.js';

////    Styles    //////////////////////////////////
////////////////////////////////////////////////////
const MainContainer = styled.main`
  width: 900px;
`;

////    Component    ///////////////////////////////
////////////////////////////////////////////////////
const ImageGallery = ({ product_id }) => {

  return (
    <MainContainer>
      {/* <DisplayImage /> */}
      <VerticalThumbs />
    </MainContainer>
  );
};

export default ImageGallery;



// const [styles, setStyles] = useState([]);

// useEffect(() => {
//   getStyles(product_id);
// }, []);

// const getStyles = (product_id) => {
//   if (product_id) {
//     axios.get(`/products/${product_id}/styles`)
//       .then(({ data }) => setStyles(data.results))
//       .catch(err => console.log(err));
//   }
// };
