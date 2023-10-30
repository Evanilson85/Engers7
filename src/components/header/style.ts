import styled from "styled-components";

export const header = styled.header`
  margin: 60px 0 20px;

  @media (min-width: 768px) {
    margin: 100px 0 20px;
  }

  .containerMobile {
    position: relative;
  }

  .mobile {
    background: rgb(70 123 177);
    background: linear-gradient(
      180deg,
      rgb(70 123 177) 0%,
      rgb(70 123 177) 57%,
      rgb(255 255 255) 50%,
      rgb(255 255 255) 100%
    );
    position: relative;

    @media (min-width: 768px) {
      display: none;
    }

    h1 {
      font-family: ${(props) => props.theme.fonts.Hind};
      color: ${(props) => props.theme.color.white};
      font-size: 3rem;
    }
    
    h2 {
      font-family: ${(props) => props.theme.fonts.Hind};
      color: ${(props) => props.theme.color.white};
      font-size: 2.5rem;
    }

    .containerText {
      position: absolute;
      top: 55px;
      margin: 10px;

      .containerP {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 10px 0;

        .subContainerP {
          gap: 5px;
          display: flex;
          align-items: center;
        }
        
        p {
          font-family: ${(props) => props.theme.fonts.inter};
          color: ${(props) => props.theme.color.white};
          font-size: 0.8rem;
        }
      }
    }
    

    img {
      width: 100%;
    }
  }

  .desktop {
    background: rgb(70 123 177);
    background: linear-gradient(
      90deg,
      rgb(70 123 177) 0%,
      rgb(70 123 177) 49%,
      rgb(255 255 255) 50%,
      rgb(255 255 255) 100%
    );

    align-items: center;
    justify-content: center;
    height: auto;
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }

    img {
      object-fit: cover;
      @media (max-width: 1300px) {
        width: 100%;
      }
    }
  }
`;
