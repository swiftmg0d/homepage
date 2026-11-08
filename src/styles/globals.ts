import { glob } from 'goober';
import '@fontsource/epilogue/500.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import { fonts } from './tokens';

export const injectGlobals = () => glob`
  *, *::before, *::after { box-sizing: border-box; border: 0 solid; margin: 0; padding: 0; }
  html { line-height: 1.5; -webkit-text-size-adjust: 100%; height: 100%; }
  html, body { width: 100%; min-height: 100%; }
  body {
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    overscroll-behavior-y: none;
    -webkit-tap-highlight-color: transparent;
  }
  button { font: inherit; color: inherit; background: none; cursor: pointer; text-transform: none; }
  a { color: inherit; text-decoration: none; }
  img, svg { display: block; }
  h1, p { font-size: inherit; font-weight: inherit; }
  ::-webkit-scrollbar { display: none; }
`;
