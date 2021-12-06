import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {

        --background: #182F52;
        --table: #FFFFFF;
        --table-text: #000000;
        --button-background: #44A3CF;
        --text-area-background: #E9E9E9;
        --button-text: #FFFFFF;
        --text-area-text: #676767;

    }

    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;

        background: var(--background);
        font-family: 'Poppins', sans-serif;

        border-radius: 0.5rem;

        align-items: center;
        justify-content: center;
        text-align: center;

    }

`