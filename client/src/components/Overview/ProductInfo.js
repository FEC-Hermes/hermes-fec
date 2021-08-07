import styled from 'styled-components';

const MainContainer = styled.main`
  width: 340px;
  height: 200px;
  top-margin: 30px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
`;

const StarRating = styled.div`
  margin-top: 10px;
  display: flex;
`;

const ReviewLink = styled.a`
  font-family: 'Josefin Slab', serif;
  font-size: 16px;

  margin-left: 20px;
`;

const Category = styled.div`
  font-family: 'Josefin Slab', serif;
  font-size: 25px;
`;

const ProductName = styled.div`
  font-family: 'Josefin Slab', serif;
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 40px;
`;

const Social = styled.div`
  height: 60px;
  width: 340px;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Pinterest = styled.div`
  :hover{
    cursor: pointer;
  }
`;

const Insta = styled.div`
  :hover{
    cursor: pointer;
  }
`;

const Twitter = styled.div`
  :hover{
    cursor: pointer;
  }
`;

export {MainContainer, StarRating, ReviewLink, Category, ProductName, Social, Pinterest, Insta, Twitter };