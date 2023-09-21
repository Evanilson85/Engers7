import styled, { keyframes } from "styled-components";
import InputMask from "react-input-mask";

export const ContainerForms = styled.div`
  padding: 50px 0 20px;
  width: 95%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fonts.Hind};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  border: 0 0 20px;
  text-align: center;

  @media (min-width: 760px) {
    font-size: 2.8rem;
  }
`;

export const FormCp = styled.form`
  width: 100%;
  max-width: 940px;
  margin: 20px auto 0;

  div {
    margin: 10px 0 30px;

    label,
    span {
      font-family: ${(props) => props.theme.fonts.inter};
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      margin: 0 0 7px;
    }

    span {
      color: #ff0000;
    }

    &:last-child {
      margin: 30px 0;
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
`;

export const Inputs = styled.input`
  background-color: ${(props) => props.theme.color.gray};
  height: 53px;
  width: 100%;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 15px;
  font-style: normal;
`;

export const InputsMaskFone = styled(InputMask)`
  background-color: ${(props) => props.theme.color.gray};
  height: 53px;
  width: 100%;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 15px;
  font-style: normal;
`;

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.color.gray};
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 4px;
  height: 143px;
  margin: 10px 0;
  resize: none;
`;

export const SendButton = styled.button`
  width: 131px;
  height: 53px;
  border-radius: 5px;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.textWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.inter};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #fff;
  animation: ${spin} 1s linear infinite;
`;
