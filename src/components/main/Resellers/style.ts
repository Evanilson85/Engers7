import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.black};
  /* height: 400px; */
  /* margin: 56px auto 0; */
  `

export const SubContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 95%;
  padding: 20px 0;
  margin: 0 auto;

  h1 {
    color: ${(props) => props.theme.color.secudary} ;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0 0;
  }
`

export const Card = styled.div`
  display: flex;
  flex: 1;
  min-width: 350px;
  width: 100%;
  gap: 20px;
  margin: 10px 0 ;

  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    margin: 30px 12px 10px;
  }
`

export const Name = styled.h2`
  color: ${(props) => props.theme.color.white};
  `

export const Image = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 82px;
    object-fit: cover;
  }
  `

export const P = styled.p`
  color: ${(props) => props.theme.color.white};
`