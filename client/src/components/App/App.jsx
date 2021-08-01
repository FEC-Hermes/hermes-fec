import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';
import styled from 'styled-components';
import ProductContext from '../contexts/ProductContext.js';
import StylesContext from '../contexts/StylesContext';
import MainContainer from './styles.js'

const App = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  useEffect(() => {
    axios.get('/products/17071')
      .then(({ data }) => {
        setProduct(data);
        // HELFPUL FAILS AT 17
        // NEWEST FAILS AT
        console.log(data);
        axios.get(`/reviews/${data.id}/newest/1/2`)
          .then(({data}) => {
            setReviews(data);
          });
        axios.get(`/reviews/meta/${data.id}`)
          .then(({ data }) => {
            setReviewMeta(data);
          });
      });
  }, []);
  /* REFACTOR INTO CONTEXT FILE ========= */
  const [allStyles, setAllStyles] = useState([]);
  const [currStyle, setCurrStyle] = useState({});
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [minImgIdx, setMinIndex] = useState(0);
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
            <nav>NAV BAR</nav>
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
                    minIndex:  [minImgIdx, setMinIndex],
                    expanded:  [expanded, setExpanded]
                  }}>
                    <Overview />
                    <Related_Items_Comparison />
                  </StylesContext.Provider>
                  : null
              }
              {/*                                    */}
              <QandA />
              <RatingsAndReviews />
            </ProductContext.Provider>
          </div>
          :
          null
      }
    </MainContainer>
  );
};
export default App;