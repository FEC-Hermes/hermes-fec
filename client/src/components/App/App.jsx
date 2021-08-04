import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

import Overview from '../Overview/Overview.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import QandA from '../Q&A/Q&A.jsx';
import ProductContext from '../contexts/ProductContext.js';
import StylesContext from '../contexts/StylesContext';
import MainContainer from './styles.js';
import NavBar from '../NavBar/NavBar.jsx';


const App = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  const [productId, setProductId] = useState(17071);

  const relatedProductClicked = id => {
    setProductId(id);
  };

  useEffect(() => {
    axios.get(`/products/${productId}`) //only product id that has scrolling thumbnails
      .then(({ data }) => {
        setProduct(data);
        axios.get(`/reviews/${data.id}/relevent/1/1000`)
          .then(({ data }) => {
            setReviews(data);
          });
        axios.get(`/reviews/meta/${data.id}`)
          .then(({ data }) => {
            setReviewMeta(data);
          });
      });
  }, [productId]);
  /* REFACTOR INTO CONTEXT FILE ========= */
  const [allStyles, setAllStyles] = useState([]);
  const [currStyle, setCurrStyle] = useState({});
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);


  const getStyles = (product_id) => {
    axios.get(`/products/${product_id}/styles`)
      .then(({ data }) => {
        setAllStyles(data.results);
        setCurrStyle(data.results[0]);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getStyles(product.id);
  }, [product]);
  /* REFACTOR INTO CONTEXT FILE ========= */
  return (
    <MainContainer>
      {
        Object.keys(reviewMeta).length > 0
          ?
          <div>
            <NavBar />
            <ProductContext.Provider value={{
              product: [product, setProduct],
              reviews: reviews,
              setReviews: setReviews,
              reviewMeta: reviewMeta,
              setReviewMeta: setReviewMeta
            }}>
              {/* NEED TO REFACTOR INTO CONTEXT FILE */}
              {
                Object.keys(currStyle).length ?
                  <StylesContext.Provider value={{
                    allStyles: [allStyles, setAllStyles],
                    currStyle: [currStyle, setCurrStyle],
                    imgIndex:  [currImgIdx, setCurrImgIdx],
                    expanded:  [expanded, setExpanded]
                  }}>
                    <Overview />
                    <Related_Items_Comparison
                      relatedProductClicked={relatedProductClicked}
                    />
                  </StylesContext.Provider>
                  : null
              }
              {/*                                    */}
              <QandA />
              {
                Object.keys(reviews).length > 0
                  ?
                  <RatingsAndReviews />
                  :
                  null
              }
            </ProductContext.Provider>
          </div>
          :
          null
      }
    </MainContainer>
  );
};
export default App;