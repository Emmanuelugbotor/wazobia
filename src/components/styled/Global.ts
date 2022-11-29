import {createGlobalStyle} from "styled-components";
const GlobalStyles = createGlobalStyle`
    html{
        font-size:62.5%;
    }
    *,
    *::after,
    *::before{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    a{
        text-decoration:none;
    }
    ul,
    li{
        list-style-type: none;
    }
    .css-1t1j96h-MuiPaper-root-MuiDialog-paper{
        max-width:50rem;
        width:100%;
    }
`
export default GlobalStyles;