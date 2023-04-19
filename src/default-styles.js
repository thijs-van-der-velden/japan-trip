import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';

export const GlobalStyle = createGlobalStyle`
    ${reboot};

    html {
        font-size: 16px;
    }

    body {
        min-height: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.font.primary};
        color: ${({ theme }) => theme.palette.text};
        font-size: ${({ theme }) => theme.text.size.base};
        line-height: ${({ theme }) => theme.text.lineHeight.base};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({ theme }) => theme.font.secondary};
        font-weight: ${({ theme }) => theme.text.weight.normal};
    }


    p {
        margin-bottom: 0;
    }

    small {
        font-size: ${({ theme }) => theme.text.size.small};
        line-height: ${({ theme }) => theme.text.lineHeight.base};
    }

    img {
        max-width: 100%;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
        &:focus {
      
        }
    }

    li {
        margin-bottom: ${({ theme }) => theme.spacing.standard};
    }

    ol {
        list-style: none;
        padding-left: 0;
    }

    ol li{
        counter-increment: step-counter;
        position: relative;
        padding-left: 2em;
    }

    ol li:before {
        content: counter(step-counter);
        display: block;
        font-size: inherit;
        left: .6em;
        min-width: 1em;
        position: absolute;
        text-align: center;
        top: 0;
    }

    hr{
        border: none;
        border-top: 2px solid ${({ theme }) => theme.palette.text};
        clear: both;
        margin-bottom: ${({ theme }) => theme.spacing.standard};
        margin-top: ${({ theme }) => theme.spacing.medium};
    }

    .ReactModal__Body--open {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }

    label {
        margin-bottom: ${({ theme }) => theme.spacing.t};
    }

    body {
      background: white;
    }

    p.jp, p.tiny {
        font-size: ${({ theme }) => theme.text.size.t };
    }

    p.light {
        color: ${({ theme }) => theme.palette.beige };
    }
`;
