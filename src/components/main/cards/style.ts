import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 95%;
  margin: 56px auto;

  h1 {
    color: ${(props) => props.theme.color.secudary};
  }

  .containerCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const Container = styled.div`
  max-width: 369px;
  width: 100%;
  height: 216px;
  margin: 56px 0;

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
  max-width: 369px;
  height: 216px;
  
  img {
    border-radius: 15px;
    width: 100%;
  }
  /* background: #457bb1; */
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white} !important;
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
  color: ${(props) => props.theme.color.white};
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
