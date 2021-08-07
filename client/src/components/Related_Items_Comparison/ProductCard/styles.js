import styled from 'styled-components';

const RelatedProducts = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  background-color: whitesmoke;
 `;

const Image_container = styled.div`
  height: 18rem;
  width: 16rem;
  overflow: hidden;
  deisplay: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: ${props => props.height};
  ${'' /* width: ${props => props.width}; */}
  width: auto;
  transition-duration:1s ease;
  transform:scale(1)
`;

const Card = styled.div`
   margin: 1rem;
   border: 0.25rem solid gray;
`;

const CardText = styled.p`
  margin-left: 0.5rem;
  font-size: ${props => props.font_size};
  color: ${props => props.color};
`;

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

// ThumbnailContainer
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

const Arrow_space_filler = styled.div`
   margin-right:${props => props.mr};

`;

export  {RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer, ThumbnailContainer,Thumbnail_Image_Container,Arrow_space_filler, StarsContainer};