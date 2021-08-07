import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

import Overview from '../Overview/Overview.jsx';
const Related_Items_Comparison = lazy(() => import('../Related_Items_Comparison/Related_Items_Comparison.jsx'));
const RatingsAndReviews = lazy(() => import('../Ratings&Reviews/Ratings&Reviews.jsx'));
const QandA = lazy(() => import('../Q&A/Q&A.jsx'));
import ProductContext from '../contexts/ProductContext.js';
import StylesContext from '../contexts/StylesContext';
import MainContainer from './styles.js';
import NavBar from '../NavBar/NavBar.jsx';


const App = () => {
  const [product,    setProduct] =    useState({});
  const [reviews,    setReviews] =    useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  const [productId,  setProductId] =  useState(17071);

  const [allStyles,  setAllStyles] =  useState([]);
  const [currStyle,  setCurrStyle] =  useState({});
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [expanded,   setExpanded] =   useState(false);

  const relatedProductClicked = id => {
    setProductId(id);
  };

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then(({ data }) => {
        setProduct(data);
        axios.get(`/products/${productId}/styles`)
          .then(({ data }) => {
            setAllStyles(data.results);
            setCurrStyle(data.results[0]);
          })
          .catch(err => console.log(err));
      });
  }, [productId]);

  useEffect(() => {
    if (Object.keys(product).length) {
      axios.get(`/reviews/${product.id}/relevent/1/50`)
        .then(({ data }) => setReviews(data));
      axios.get(`/reviews/meta/${product.id}`)
        .then(({ data }) => setReviewMeta(data));
    }
  }, [product]);

  return (
    <MainContainer>
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
                <Suspense fallback={ <div>Loading...</div> }>
                  <Related_Items_Comparison relatedProductClicked={relatedProductClicked} />
                </Suspense>
              </React.Fragment>
              : null
          }
        </StylesContext.Provider>
        {
          Object.keys(reviews).length ?
            <Suspense fallback={ <div>Loading...</div> }>
              <React.Fragment>
                <QandA />
                <RatingsAndReviews />
              </React.Fragment>
            </Suspense>
            : null
        }
      </ProductContext.Provider>
    </MainContainer>
  );
};

export default App;
