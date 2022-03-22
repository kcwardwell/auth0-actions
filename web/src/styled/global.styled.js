import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin 0;
  padding 0;
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
  }
  
  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
  }
  
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }
  
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ul {
      list-type: none
  }


`

export default GlobalStyled