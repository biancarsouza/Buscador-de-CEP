import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {

        --background: #222629;
        --button-background: #0677A1;
        --text-area-background: #D6D6D6;
        --button-text: #FFFFFF;
        --text-area-text: #777777;

    }

    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;

        background: var(--background);
        font-family: 'Poppins', sans-serif;

    }

`