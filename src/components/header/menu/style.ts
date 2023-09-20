import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
  background: #fff;

  .logo {
    padding: 0;
    object-fit: cover;
    width: 110px;
    height: 60px;

    @media (min-width: 768px) {
      padding: 5px 0;
    }

    img {
      width: 100%;

      @media (min-width: 768px) {
        width: auto;
      }
    }
  }

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
