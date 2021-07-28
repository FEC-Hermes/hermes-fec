import styled from 'styled-components';

const RelatedProducts = styled.div`
  display:flex;
  color: ${props => props.color};
 `;

const Image_container = styled.div`
  height: 25rem;
`;

const Img = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
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

const ExitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ExitImg = styled.img`
  position: absolute;
  height: 2rem;
  border-radius: 3rem;
`;


export  {RelatedProducts, Image_container, Img, Card, CardText, ExitContainer, ExitImg};