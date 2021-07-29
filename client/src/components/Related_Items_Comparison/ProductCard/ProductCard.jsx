import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal.jsx';
import ProductContext from '../../contexts/ProductContext.js';
import {RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer} from './styles.js';


const ProductCard = () => {
  const {product:[product]} = React.useContext(ProductContext);
  const [relatedProducts, setProduct] = useState([]);
  let [count, setCount] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const {id, category} = product;
  console.log('product',product);
  console.log('relatedProducts',relatedProducts);
  let carouselProducts = relatedProducts.slice(count,count + 4).length < 4?
    relatedProducts.slice(count-1,count + 4):
    relatedProducts.slice(count,count + 4);
  
  useEffect( () => {
    async function fetchData(){
      const {data} = await axios.get(`/products/${17067}/styles`);
      setProduct(data.results);
      return data;
    }
    fetchData();
  },[product]);
  return (
    <RelatedProducts>
      <Img
        onClick={() => count > 0 ? setCount(count-=1):null}
        height={'4rem'}
        width={'3rem'}
        src='https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_left-512.png'
      />

      {
        carouselProducts.map( ({style_id,name,original_price,photos}) => {
          let url = photos[0].url;
          return  (
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
                <Img  height={'25rem'} width={'16rem'} src={url} />
              </Image_container>
              <CardText font_size={'1.4rem'} color={'steelblue'}>{category}</CardText>
              <CardText font_size={'1.5rem'}>{name}</CardText>
              <CardText font_size={'1rem'} >${original_price}</CardText>
              <Stars margin={'0 0 0 0.5rem'}src="stars.png" />
            </Card>
          ) ;
        }
        )}
      { isToggled? <Modal /> : null}
      <Img
        onClick={() => count < 3? setCount(count+=1): setCount(3)}
        height={'4rem'}
        width={'3rem'}
        src='https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png'/>

    </RelatedProducts>
  );
};

export default ProductCard;