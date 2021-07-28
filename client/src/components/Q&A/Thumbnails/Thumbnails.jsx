import React from 'react';
import styled from 'styled-components';

const ImgSection = styled.section`
    display: flex;
    width: 30%;
`;

const ImgDiv = styled.div`
    flex: 1;
    margin: 1%;
`;

const Img = styled.img`

`;
const Thumbnails = ({photos}) => {
//   {console.log(photos)}
  return (
    <div>
      <h2>Yes, as you can see in these photos.</h2>
      <ImgSection>
        {photos.map((photo, id) => {
          return (<ImgDiv key={id}>
            {/* photo.url */}
            <Img src='https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' />
          </ImgDiv>);
        })}
        {/* <ImgDiv>Img 2</ImgDiv>
        <ImgDiv>Img 3</ImgDiv> */}
      </ImgSection>
    </div>
  );
};

export default Thumbnails;