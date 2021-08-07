import React from 'react';
import { ImgDiv, ImgSection, Img } from './Thumbnails.js';

const stock = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1JQ3OQNW5aWpNsb26trekQVLmwkZz7ZiHA&usqp=CAU',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://www.fedex.com/content/dam/fedex/us-united-states/FedEx-Office/images/2021/q4/Custom-Promotional-Products-727x463.jpg'
];

const Thumbnails = ({ photos = stock }) => {
  return (
    <div>
      <h2>Yes, as you can see in these photos.</h2>
      <ImgSection>
        {photos.map((photo, id) => {
          return (<ImgDiv key={id}>
            <Img src={photo.url} alt="photo"/>
            <Img src={stock[id]} alt="photo"/>

          </ImgDiv>);
        })}
      </ImgSection>
    </div>
  );
};

export default Thumbnails;