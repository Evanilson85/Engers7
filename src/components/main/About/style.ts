import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 56px auto;
  display: flex;

  .containerText {
    display: flex;
    flex-direction: column;
    padding: 20px;

    .paragraphs {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    h1 {
      color: ${(props) => props.theme.color.primary};
      font-family: ${(props) => props.theme.fonts.Hind};
      font-size: 2.875;
      font-style: normal;
      font-weight: 700;
      border: 0 0 20px;
      margin-bottom: 20pxd;
    }

    p {
      color: ${(props) => props.theme.color.text};
      font-family: ${(props) => props.theme.fonts.inter};
      font-weight: 300;
      font-style: normal;

      margin: 0 10px 0 0;
      line-height: 1.5;
      font-size: 1.2rem;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
