import styled, { css } from "styled-components";

interface PROPS {
  center?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media(min-width: 768px) {
    flex-direction: row;
  }
  `

export const Div = styled.div<PROPS>`
  width: 95%;
  margin: 0 auto;

  ${({ center }) => center && css`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding: 0 20px 0 0;
  `}
  @media(min-width: 768px) {
    width: 50%;
  }
`

export const H1 = styled.h1`
  color: ${(props) => props.theme.color.secudary};
  font-size: 46px;
  margin: 20px 0;
  `

export const P = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 22px;
  line-height: 1.3;
`

export const ImageIcon = styled.img``