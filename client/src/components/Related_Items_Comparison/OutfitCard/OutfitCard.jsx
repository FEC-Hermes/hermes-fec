import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import Thumbnails from '../ProductCard/Thumbnails.jsx';
import Modal from '../Modal/Modal.jsx';
import StarAverageRating from '../../Shared/StarAverageRating.jsx';
import ProductContext from '../../contexts/ProductContext.js';
import {RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer, StarsContainer} from './styles.js';


const OutFitCard = ({count:idx}) => {
  const {product:[product],reviewMeta:{ratings}} = useContext(ProductContext);
  let [relatedProducts, setProduct] = useState([]);
  let [count, setCount] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const {category} = product;
  // console.log(relatedProducts.slice(0,idx));
  relatedProducts = relatedProducts.slice(0,idx);
  let carouselProducts = relatedProducts.length === 2 ?
    relatedProducts :
    relatedProducts.slice(count,count + 3).length < 3 ?
      relatedProducts.slice(count-1, count + 3):
      relatedProducts.slice(count, count + 3);

  const remove = element => {
    const selectEl = element.parentNode.parentNode.parentNode;
    selectEl.remove();
  };

  useEffect( () => {
    async function fetchData(){
      const {data} = await axios.get(`/products/${product.id}/styles`);
      setProduct(data.results);
      return data;
    }
    fetchData();
  },[product]);

  return (
    <RelatedProducts id={1}>
      {count !== 0 ?
        <Img
          onClick={() => count > 0 ? setCount(count-=1):null}
          height={'4rem'}
          width={'3rem'}
          src='https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_left-512.png'
        /> : null
      }
      {

        carouselProducts.map( ({style_id,name,original_price,photos},idx) => {
          let url = photos[0].url;
          return  (
            <Card
              key={style_id}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <Image_container>
                <StarContainer>
                  <Stars
                    onClick={(e) => remove(e.target)}
                    pos={'absolute'}
                    bottom={'16.5rem'}
                    margin={'0.5rem 0rem 0 0'}
                    z_index={100}
                    src="http://cdn.onlinewebfonts.com/svg/img_524275.png" />
                </StarContainer>
                <Img
                  onClick={(e) => console.log(e.target)}
                  id={idx}
                  height={'25rem'}
                  width={'16rem'}
                  src={url}
                />
                <Thumbnails photos={photos} isShown={isShown}/>
              </Image_container>
              <CardText font_size={'1.4rem'} color={'steelblue'}>{category}</CardText>
              <CardText font_size={'1.5rem'}>{name}</CardText>
              <CardText font_size={'1rem'} >${original_price}</CardText>
              <StarsContainer>
                <StarAverageRating ratings={ratings} />
              </StarsContainer>
            </Card>
          );
        }
        ) }
      { isToggled? <Modal /> : null}
      {count !== 3?
        <Img
          onClick={() => count < 3? setCount(count+=1): setCount(3)}
          height={'4rem'}
          width={'3rem'}
          src='https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png'/> : null
      }
    </RelatedProducts>
  );
};

export default OutFitCard;