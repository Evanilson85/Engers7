import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    max-height: 133px;
    gap: 0px;
  }

  div {
    max-width: 1200px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme.color.white};
      font-family: ${(props) => props.theme.fonts.inter};
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin: 2px 0;

      strong {
        a {
          color: #34c831;
        }
      }

      @media (min-width: 768px) {
        margin: 10px 0;
        font-size: 1rem;
      }
    }

    @media (min-width: 768px) {
      gap: 10px;
      flex-direction: row;
    }
  }
`;
