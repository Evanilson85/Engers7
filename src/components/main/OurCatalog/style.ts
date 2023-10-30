import styled, { css } from "styled-components";

interface PROPS {
  secudary?: boolean
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.secudary};
  height: 100%;
  margin: 40px auto 0;
  padding: 1px 0 50px;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 95%;
  margin: 56px auto 0;
`

export const H1 = styled.h1`
  margin-top: 30px;
  color: ${(props) => props.theme.color.white};
`

export const ContainerGrid = styled.div<PROPS>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 30px 0;
  ${({ secudary }: PROPS) => secudary && css`
      grid-template-columns: 1fr 1fr;
    `}
  
`

export const Card = styled.div``

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.a`
  background-color: transparent;
  border-radius: 5px;
  border: solid ${(props) => props.theme.color.white} 1px;
  width: 184px;
  height: 54px;
  cursor: pointer;
  color: ${(props) => props.theme.color.white};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${(props) => props.theme.color.secudary};
    background-color: ${(props) => props.theme.color.white};
  }

`