import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
        text-decoration: none;
    } 
    
    body {
        background: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.text};    
        height: 100%;
    }
`;


