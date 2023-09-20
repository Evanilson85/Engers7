import styled from "styled-components";

export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 0 0 50px;
  padding: 60px 0;

  li {
    padding: 18px 10px;
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.inter};
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.color.primary};
    }

    &:focus {
      font-weight: 700;
    }

    a {
      color: ${(props) => props.theme.color.black};
      transition: 0.1s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.color.primary};
        font-weight: 700;
      }
    }
    .active {
      color: ${(props) => props.theme.color.primary} !important;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.color.white};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      /* color: #fff; */
    }
  }
`;
