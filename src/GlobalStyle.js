import { createGlobalStyle } from "styled-components";
import background from "./shutterstock_68081092.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        box-sizing: border-box;
    }

    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    .app {
        flex-basis: 700;
        margin: 20;
        padding: 40px;
        background: ${({theme}) => theme.color.white};
        border-radius: 20px;
        box-shadow: 0 0 30px ${({theme}) => theme.color.black};
    }
    `