import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import Thumbnails from './Thumbnails.jsx';
import Modal from '../Modal/Modal.jsx';
import StarAverageRating from '../../Shared/StarAverageRating.jsx';
import ProductContext from '../../contexts/ProductContext.js';
import {RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer, StarsContainer, Arrow_space_filler} from './styles.js';


const ProductCard = ({relatedProductClicked}) => {
  const {product:[product],reviewMeta:{ratings}} = useContext(ProductContext);
  const [relatedProducts, setProduct] = useState([]);
  const [isToggled, setToggle] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [photoUrl,setPhotos] = useState(false);
  const [productCardId,setProductCardId] = useState(false);
  let [count, setCount] = useState(0);
  let {id, category} = product;
  let carouselProducts = relatedProducts.length === 4 ?
    relatedProducts :
    relatedProducts.slice(count,count + 4).length < 4 ?
      relatedProducts.slice(count-1, count + 4):
      relatedProducts.slice(count, count + 4);

  const getProductStyles = async (id) => {
    const {data} = await axios.get(`/products/${id}/styles`);
    return data;
  };

  let photosArr = carouselProducts.map(({results:[{photos:[photos]}]}) => photos);
  const thumbnailClicked = (url,idx) => {
    photosArr[idx].url = url;
    setPhotos(photosArr);
  };

  const clickStar = id => {
    setToggle(!isToggled);
    setProductCardId(id);
  };

  useEffect( () => {
    async function fetchData(){
      try {
        const {data} = await axios.get(`/products/${id}/related`);
        let newData = [...new Set(data)];
        let productStylesArr = [];
        for(let i = 0; i < newData.length;i++){
          const products = await getProductStyles(newData[i]);
          productStylesArr.push(products);
        }
        setProduct(productStylesArr);
      }
      catch(err){
        console.log(err);
      }
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
        /> : <Arrow_space_filler mr={'3rem'} />
      }
      {

        carouselProducts.map(({product_id,results},idx) =>
        {
          const [{name,original_price,}] = results;
          return (
            <Card
              key={idx}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              // onMouseEnter={() => onHover()}
            >
              <Image_container>
                <StarContainer>
                  <Stars
                    alt="star"
                    onClick={() => clickStar(product_id)}
                    pos={'absolute'}
                    bottom={'16.5rem'}
                    margin={'0.5rem 0rem 0 0'}
                    z_index={100}
                    src="https://cdn.onlinewebfonts.com/svg/img_325911.png" />
                </StarContainer>
                <Img
                  alt="product image"
                  onClick={() => relatedProductClicked(product_id)}
                  id={idx}
                  height={'25rem'}
                  width={'16rem'}
                  src={photoUrl?photoUrl[idx].url:photosArr[idx].url}
                />
                <Thumbnails
                  photos={photosArr}
                  isShown={isShown}
                  thumbnailClicked={thumbnailClicked}
                />
              </Image_container>
              <CardText font_size={'1.4rem'} color={'black'}>{category}</CardText>
              <CardText font_size={'1.5rem'}>{name}</CardText>
              <CardText font_size={'1rem'} >${original_price}</CardText>
              <StarsContainer>
                <StarAverageRating ratings={ratings} />
              </StarsContainer>
            </Card>
          ) ;
        }
        )}
      { isToggled? <Modal productCardId={productCardId}/> : null}
      {count !== 3?
        <Img
          alt="arrow right"
          onClick={() => count < 3? setCount(count+=1): setCount(3)}
          height={'4rem'}
          width={'3rem'}
          src='https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png'/> : <Arrow_space_filler mr={'3rem'} />
      }
    </RelatedProducts>
  );
};

export default ProductCard;