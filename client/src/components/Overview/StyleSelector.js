import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  width: 370px;
  flex-wrap: wrap;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const Price = styled.div`
  font-family: 'Josefin Slab', serif;
  font-size: 16px;
`;

const PriceSlash = styled.div`
  font-family: 'Josefin Slab', serif;
  font-size: 16px;
  text-decoration: line-through;
`;

const SalePrice = styled.div`
  font-family: 'Josefin Slab', serif;
  font-size: 16px;
  font-weight: bold;
  color: red;
`;

const OuterThumbContainer = styled.div`
  height: 80px;
  width: 80px;
  margin: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Style = styled.div`
  font-family: 'Josefin Slab', serif;
  font-size: 16px;
  width: 350px;
  margin-bottom: 5px;
`;

const ThumbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 4px #000;
  border: 2px solid #000;
`;

const Img = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;
`;

const CheckMark = styled.svg`
  position: absolute;
  top: -7px;
  right: -7px;

  visibility: hidden;
`;

export { Container, PriceContainer, Price, PriceSlash, SalePrice, OuterThumbContainer, Style, ThumbContainer, Img, CheckMark };