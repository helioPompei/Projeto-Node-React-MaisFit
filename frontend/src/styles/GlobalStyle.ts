import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: montserrat;

    font-size: 62.5%;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar {
      color: blue;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(p) => p.theme.colors.primary};
      border: 1.5px solid #fff;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
