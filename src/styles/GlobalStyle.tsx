import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.color.bgColor};
    color: ${(props) => props.theme.color.textColor};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
