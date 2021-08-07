import styled from 'styled-components';

const IconContainer = styled.div`
  height: auto;
  width: 60px;

  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 4rem;
  left: 20px;
`;

const IconFrame = styled.div`
  width: 45px;
  height: 45px;
  margin: 4px;
  overflow: hidden;
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 70px;
  object-fit: cover;
  filter: grayscale(100%);
  cursor: pointer;
`;

export { IconContainer, IconFrame, Icon };