import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 56px auto;

  .div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 501px;
  }

  &:nth-child(odd) {
    justify-content: end;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
  /* background: #457bb1; */
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const TextInfo = styled.p`
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0 10px 0 0;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
