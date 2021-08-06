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
  const [productId, setProductId] = useState(17141);

  /* REFACTOR INTO CONTEXT FILE ========= */
  const [allStyles, setAllStyles] = useState([]);
  const [currStyle, setCurrStyle] = useState({});
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);

  /* REFACTOR INTO CONTEXT FILE ========= */

  const relatedProductClicked = id => {
    setProductId(id);
  };

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then(({ data }) => {
        setProduct(data);
        axios.get(`/reviews/${data.id}/relevent/1/1000`)
          .then(({ data }) => setReviews(data));
        axios.get(`/reviews/meta/${data.id}`)
          .then(({ data }) => setReviewMeta(data));
        axios.get(`/products/${productId}/styles`)
          .then(({ data }) => {
            setAllStyles(data.results);
            setCurrStyle(data.results[0]);
          })
          .catch(err => console.log(err));
      });
  }, [productId]);

  return (
    <MainContainer>
<<<<<<< HEAD
      <NavBar />
      <ProductContext.Provider value={{
        product: [product, setProduct],
        reviews: reviews,
        setReviews: setReviews,
        reviewMeta: reviewMeta,
        setReviewMeta: setReviewMeta
      }}>
        <StylesContext.Provider value={{
          allStyles: [allStyles, setAllStyles],
          currStyle: [currStyle, setCurrStyle],
          imgIndex:  [currImgIdx, setCurrImgIdx],
          expanded:  [expanded, setExpanded]
        }}>
          {
            Object.keys(currStyle).length ?
              <React.Fragment>
                <Overview />
                <Related_Items_Comparison relatedProductClicked={relatedProductClicked} />
              </React.Fragment>
              : null
          }
        </StylesContext.Provider>
        {
          Object.keys(reviews).length ?
            <React.Fragment>
=======
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
                    {/* <Overview /> */}
                    {/* <Related_Items_Comparison
                      relatedProductClicked={relatedProductClicked}
                    /> */}
                  </StylesContext.Provider>
                  : null
              }
              {/*                                    */}
>>>>>>> mergerQnA
              <QandA />
              <RatingsAndReviews />
            </React.Fragment>
            : null
        }
      </ProductContext.Provider>
    </MainContainer>
  );
};
export default App;
