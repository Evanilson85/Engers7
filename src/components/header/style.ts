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

    @media (min-width: 768px) {
      display: none;
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
