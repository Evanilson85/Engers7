import styled from "styled-components";

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
    label {
      font-family: ${(props) => props.theme.fonts.inter};
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      margin: 0 0 7px;
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
  margin: 10px 0 30px;
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
