import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  /* height: 90vh; */

  .subContainer {
    height: 800px;
    position: relative;
    top: 100px;
  }
`;

export const Slide = styled.div`
  position: relative;
  height: 100%;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

export const Text = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
