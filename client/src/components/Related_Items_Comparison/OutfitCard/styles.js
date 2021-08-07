import styled from 'styled-components';

const RelatedProducts = styled.div`
  display:flex;
  color: ${props => props.color};
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
 `;

const Image_container = styled.div`
  height: 18rem;'
  width: 16rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: ${props => props.height};
  ${'' /* width: ${props => props.width}; */}
  width: auto;
`;

const Card = styled.div`
   margin: 1rem;
   width: 16rem;
   border: 0.25rem solid gray;
   overflow: hidden;
`;

const CardText = styled.p`
  margin-left: 0.5rem;
  font-size: ${props => props.font_size};
  color: ${props => props.color};
`;

const ExitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ExitImg = styled.img`
  position: absolute;
  height: 2rem;
  border-radius: 3rem;
`;

const PlusSign = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  height: 21rem;
  width: 16rem;
 `;


 // OutFitCards

 const StarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
`;

 const StarsContainer = styled.div`
 display: flex;
 justify-content: center;
 margin-bottom:0.5rem;

`;

const Stars = styled.img`
 margin : ${props => props.margin};
 height: 1.3rem;
 position:${props => props.pos};
 z-index:${props => props.z_index};
 background-color: white;
 border-radius: 1rem;
`;


const ThumbnailContainer = styled.div`
   display:flex;
   justify-content: space-around;
   align-items: center;
   width: 16rem;
   position: relative;
   bottom: 3rem;
`;

const Thumbnail_Image_Container = styled.div`
    // position: relative;
    // bottom: 0.25rem;
`;

const Thumbnail_arrow = styled.div`
   margin-right:1.3rem;
`;

export  {RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer, ThumbnailContainer,Thumbnail_Image_Container,Thumbnail_arrow, StarsContainer,ExitContainer, ExitImg, PlusSign};


// export  {RelatedProducts, Image_container, Img, Card, CardText, };