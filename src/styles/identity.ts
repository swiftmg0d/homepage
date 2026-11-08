import { css } from 'goober';
import { fonts } from './tokens';

export const block = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  user-select: none;

  h1 {
    color: #fff;
    font: 600 18px/1.25 ${fonts.display};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));
  }
  .row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
  .role {
    color: rgba(255, 255, 255, 0.6);
    font: 500 10px/1.5 ${fonts.body};
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
  .role a {
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .role a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  .role a:hover {
    color: #fff;
  }
  .role a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  .sep {
    color: rgba(255, 255, 255, 0.3);
    font-size: 9px;
    font-weight: 500;
  }
`;
