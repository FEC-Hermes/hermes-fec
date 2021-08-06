import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Overview from '../Overview/Overview.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';
// const Related_Items_Comparison = React.lazy(() => import('../Related_Items_Comparison/Related_Items_Comparison.jsx'));
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
                <Related_Items_Comparison relatedProductClicked={relatedProductClicked} />
              </React.Fragment>
              : null
          }
        </StylesContext.Provider>
        {
          Object.keys(reviews).length ?
            <React.Fragment>
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
