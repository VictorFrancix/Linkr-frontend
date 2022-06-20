import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* reset css */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-decoration: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    strong {
        font-weight: bold;
    }
    
    /* Global Styles */
    
    :root {
        --gray: #333333;
        --dark-gray: #151515;
        --white: #ffffff;
        --bluebutton: #1877F2;
        --bluebutton-hover: #0792f5;
        --placeholder: #EFEFEF;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
        background-color: var(--gray);
    }

    button{
        cursor: pointer;
        color: var(--white);
        background-color: var(--bluebutton);
    }

    button:hover{
        cursor: pointer;
        background-color: var(--bluebutton-hover);
    }

    button:active{
        cursor: pointer;
        background-color: var(--bluebutton-hover);
    }

    button:disabled{
        cursor: default;
        background-color: var(--gray);
    }

    select:hover{
        cursor: pointer;
    }

    ::placeholder{
        background-color: var(--placeholder);
        color: #949494;
    }
`;

export default GlobalStyles;