import styled from 'styled-components';

const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 125px;
  height: 665px;
`;

const Arrow = styled.div`
  height: 25px;
`;

const ImgContainer = styled.div`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: 100px;
  margin: 6px auto;
`;

const ImgFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid black;
  overflow: hidden;
  margin: 5px auto;
  box-shadow: 0px 0px 3px black;
`;

const Img = styled.img`
  width: 90px;
`;

export { MainContainer, Arrow, ImgContainer, ImgFrame, Img };


