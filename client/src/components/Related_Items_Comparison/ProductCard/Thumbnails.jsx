
import React,{useState} from 'react';
import {RelatedProducts, Image_container, Img, Card, StarContainer,ThumbnailContainer,Thumbnail_Image_Container,Arrow_space_filler} from './styles.js';


const Thumbnails = ({photos,isShown,thumbnailClicked }) => {
  let [count, setCount] = useState(0);
  let carouselProducts = photos.slice(count,count + 4).length < 4?
    photos.slice(count-1,count + 4):
    photos.slice(count,count + 4);
  return isShown? (
    <ThumbnailContainer>

      {count !== 0 ?
        <Img
          alt="arrow left"
          onClick={() => count > 0 ? setCount(count-=1):null}
          height={'2rem'}
          width={'2rem'}
          src='https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_left-512.png'
        /> : <Arrow_space_filler mr={'1.5rem'}/>

      }
      {
        carouselProducts.map( ({thumbnail_url},idx) => {
          return  (
            <Thumbnail_Image_Container key={idx}>

              <Img
                alt="related item thumbnail"
                onClick={() => thumbnailClicked(thumbnail_url,idx) }
                height={'2rem'}
                width={'2rem'}
                src={thumbnail_url}
              />

            </Thumbnail_Image_Container>
          ) ;
        }
        )}
      {count !== 3?
        <Img
          alt="arrow right"
          onClick={() => count < 3? setCount(count+=1): setCount(3)}
          height={'2rem'}
          width={'2rem'}
          src='https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png'/> : <Arrow_space_filler mr={'1.5rem'}/>

      }
    </ThumbnailContainer>
  ): null;
};

export default Thumbnails;