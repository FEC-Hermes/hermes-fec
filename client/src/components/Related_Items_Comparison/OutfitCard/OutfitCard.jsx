import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {RelatedProducts, Image_container, Img, Card, CardText, ExitContainer, ExitImg}from './styles.js';

const OutfitCard = () => {
    const [relatedProducts, setProduct] = useState([]);
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
                        </Card>
                    )}
                )}
        </RelatedProducts>
    );
};

export default OutfitCard;