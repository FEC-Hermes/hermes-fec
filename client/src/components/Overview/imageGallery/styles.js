import styled from 'styled-components';

const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 125px;
  height: 695px;
  top: 2rem;
  position: absolute;
`;

const ImgContainer = styled.div`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: 100px;
  height:652px;
  margin: 2px auto 2px;
`;

const ImgFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid black;
  overflow: hidden;
  margin: 7px auto;
  box-shadow: 0px 0px 3px black;
`;

const Img = styled.img`
  object-fit: cover;
  width: 90px;
  cursor: pointer;
`;

export { MainContainer, ImgContainer, ImgFrame, Img };