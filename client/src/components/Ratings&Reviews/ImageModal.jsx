import React from 'react';
import ProductContext from '../contexts/ProductContext.js';
import FullImageDisplay from './FullImageDisplay.jsx';
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    margin: auto 0;
`;

const ImageModal = ({reviewImgUrl, setReviewImgUrl}) => {
  const handleClick = () => {
    setReviewImgUrl('');
  };

  return (
    <ProductContext.Consumer>
      {({reviewMeta, product}) => {
        return (
          <ModalContainer onClick={() => handleClick()}>
            <FullImageDisplay reviewMeta={reviewMeta}
              productName={product[0].name}
              reviewImgUrl={reviewImgUrl}
              setReviewImgUrl={setReviewImgUrl}
            />
          </ModalContainer>
        )
      }}
    </ProductContext.Consumer>
  );
};

export default ImageModal;