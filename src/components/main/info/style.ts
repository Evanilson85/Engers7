import styled from "styled-components";

export const ContainerInfo = styled.div<{ imgurl?: string }>`
  background: ${(props) => props.theme.color.primary};
  padding: 30px 0;
  background-repeat: no-repeat;
  background-position: right bottom;

  @media (min-width: 765px) {
    height: 733px;
    background-image: ${(props) => `url(${props?.imgurl})`};
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.color.textWhite};
  font-family: ${(props) => props.theme.fonts.Hind};
  font-size: 2.875;
  font-style: normal;
  font-weight: 700;
  border: 0 0 20px;
  text-align: center;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 56px auto;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.textWhite};
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 300;
  display: flex;
  align-items: center;
  margin: 0 10px;
  line-height: 1.5;
  font-size: 1.2rem;

  @media (min-width: 765px) {
    font-size: 1.7rem;
    margin: 70px 0;
    width: 60%;
  }
`;
