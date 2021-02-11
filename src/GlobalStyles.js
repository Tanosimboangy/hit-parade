import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Lato_bold";
        src: local(Lato), 
        url(/fonts/Lato-Bold.woff2) format("woff2"), 
        url(/fonts/Lato-Bold.woff) format("woff"), 
    }
    @font-face {
        font-family: "Lato";
        src: local(Lato), 
        url(/fonts/Lato-Regular.woff2) format("woff2"), 
        url(/fonts/Lato-Regular.woff) format("woff"), 
    }

    html, body {
        font-family: "Arial";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        background: #f3f3fa5c;
        color: #333333;
        font-size: 16px;
        margin: 0;
        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                list-style: none;
            }
        }
        a {
            text-decoration: none;
        }
    }
`;
