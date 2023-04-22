import { css } from 'styled-components';

const theme = {
  palette: {
    text: '#333333',
    red: '#BC002D',
    blue: '#0071C4',
    lightBlue: '#00A5FD',
    darkBlue: '#004F6F',
    grey: '#574240',
    beige: '#BFA5A3',
    white: '#FFFFFF',
    offWhite: '#FFF6F4'
  },
  font: {
    primary: `'Noto Sans', 'Noto Sans JP', sans-serif`,
    secondary: `'Sofia Sans Condensed', 'Noto Sans JP', sans-serif`,
    mono: `'Noto Sans Mono', 'Noto Sans JP', sans-serif`
  },
  text: {
    size: {
      xxl: `2em`,
      xl: `1.5em`,
      l: `1.25em`,
      standard: `1em`,
      s: `0.875em`,
      t: `0.625em`
    },
    lineHeight: {
      base: 1.4
    },
    weight: {
      normal: 'normal'
    }
  },
  spacing: {
    t: `4px`,
    s: `8px`,
    standard: '12px',
    l: `16px`,
    xl: `20px`,
    xxl: `24px`
  },
};

export default theme;

export const divider = css`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -${({theme}) => theme.spacing.t};
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, rgb(48,49,51, 0.1), transparent);
  }
`
