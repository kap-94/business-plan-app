import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    
    html {
        font-size: 62.5%;
    }
    
    body {
        background-color: ${({ theme }) => theme.colors.fourth};
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5rem;
        line-height: 1.7;
        box-sizing: border-box;

        &::-webkit-scrollbar {
            width: .35rem;

        }

        &::-webkit-scrollbar-track {
            background: #1e1e24;
        }

        &::-webkit-scrollbar-thumb {
            background: #5549b8;
        }
    }
`;

export default GlobalStyles;
