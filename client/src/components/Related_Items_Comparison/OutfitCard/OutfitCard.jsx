import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {RelatedProducts, Image_container, Img, Card, CardText, ExitContainer, ExitImg,  PlusSign}from './styles.js';

const OutfitCard = () => {
  const [isOutFit, addOutFit] = useState(false);


  return (
    <RelatedProducts>
      {
        isOutFit?
          <Card key={style_id}>
            <Image_container>
              <ExitContainer>
                <ExitImg src="x_icon.jpg" />
              </ExitContainer>
              <Img  height={'25rem'} width={'20rem'} src={url} />
            </Image_container>
            <CardText
              font_size={'1.4rem'}
              color={'steelblue'}
            >{category}</CardText>
            <CardText font_size={'1.5rem'}>{name}</CardText>
            <CardText font_size={'1rem'} >${original_price}</CardText>
          </Card> :
          <RelatedProducts>
            <Card>
              <PlusSign>+</PlusSign>
            </Card>
          </RelatedProducts>
      }

    </RelatedProducts>
  );
};

export default OutfitCard;