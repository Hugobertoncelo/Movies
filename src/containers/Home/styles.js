import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Background = styled.div` 
  background-image: url(${props => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1; 
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    z-index: 2; 
  }

  * {
    position: relative;
    z-index: 3;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`;

export const Info = styled.div`
  z-index: 3;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  z-index: 3;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
