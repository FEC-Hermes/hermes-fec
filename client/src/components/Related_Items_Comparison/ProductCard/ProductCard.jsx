import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal.jsx';
import {RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer} from './styles.js';

const ProductCard = () => {
  const [relatedProducts, setProduct] = useState([]);
  const [isToggled, setToggle] = useState(false);
  const category = 'Jackets';

  useEffect( () => {
    async function fetchData(){
      const {data} = await axios.get(`/products/${17067}/styles`);
      setProduct(data.results);
      return data;
    }
    fetchData();
  },[setProduct]);
  return (
    <RelatedProducts>
      {
        relatedProducts.map( ({style_id,name,original_price,photos}) => {
          let url = photos[0].url;
          return (
            <Card key={style_id}>
              <Image_container>
                <StarContainer>
                  <Stars
                    onClick={() => isToggled? setToggle(false): setToggle(true)}
                    pos={'absolute'}
                    bottom={'16.5rem'}
                    margin={'0.5rem 0rem 0 0'}
                    src="star.png" />
                </StarContainer>
                <Img  height={'25rem'} width={'20rem'} src={url} />
              </Image_container>
              <CardText font_size={'1.4rem'} color={'steelblue'}>{category}</CardText>
              <CardText font_size={'1.5rem'}>{name}</CardText>
              <CardText font_size={'1rem'} >${original_price}</CardText>
              <Stars margin={'0 0 0 0.5rem'}src="stars.png" />
            </Card>
          );
        }
        )}
      { isToggled? <Modal /> : null}

    </RelatedProducts>
  );
};

export default ProductCard;