import styled from 'styled-components';

const Container = styled.main`
width: 1024px;
height: 200px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-left: 130px;
`;

const DescriptionContainer = styled.div`
flex-grow: 5;
padding: 10px 30px 10px;
max-width: 700px;
margin-right: 70px;
display:flex;
flex-direction: column;
align-items: center;
`;

const Slogan = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 30px;

`;

const Description = styled.article`
font-family: 'Josefin Slab', serif;
font-size: 18px;
`;

const Divider = styled.div`
height: 175px;
border-left: 3px solid black;
`;

const Attributes = styled.article`
font-family: 'Josefin Slab', serif;
font-size: 16px;
flex-grow: 1;
margin-left: 75px;
height: 135px;
width: 550px;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
`;

export {Container, DescriptionContainer, Slogan, Description, Divider, Attributes};