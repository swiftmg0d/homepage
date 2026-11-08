import { css } from 'goober';
import { bodySm, canopy, caption, overline } from './mixins';
import { colors, fonts, radius } from './tokens';

export const card = css`
  ${canopy}
  grid-area: 1 / 1;
  justify-self: center;
  position: relative;
  inset: auto;
  margin: 0;
  z-index: 1;
  width: min(20rem, 100%);
  max-height: 100%;
  overflow-y: auto;
  padding: 1.25rem;
  border-radius: ${radius.md};
  box-shadow:
    0 12px 32px -4px rgba(55, 75, 57, 0.08),
    0 4px 12px -2px rgba(55, 75, 57, 0.04),
    0 20px 40px -8px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
  &[data-placement='top'] {
    align-self: start;
  }
  &[data-placement='bottom'] {
    align-self: end;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .label {
    ${overline}
    color: ${colors.sage};
  }
  .count {
    ${caption}
    color: rgba(244, 245, 237, 0.5);
  }
  h2 {
    margin-top: 0.5rem;
    font: 500 22px/30px ${fonts.display};
    letter-spacing: -0.01em;
  }
  .body {
    ${bodySm()}
    margin-top: 0.5rem;
    color: rgba(244, 245, 237, 0.85);
  }
  ul {
    list-style: none;
    margin-top: 0.75rem;
  }
  li {
    padding: 0.75rem 0;
    border-top: 1px solid rgba(221, 225, 196, 0.1);
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }
  .item {
    ${bodySm(600)}
  }
  a.item {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: ${colors.sage};
    text-underline-offset: 3px;
    transition: text-decoration-color 0.3s ease;
  }
  a.item:hover {
    text-decoration-color: currentColor;
  }
  .meta {
    font: 500 12px/16px ${fonts.body};
    letter-spacing: 0.04em;
    color: ${colors.sage};
    text-align: right;
  }
  .text {
    ${bodySm()}
    margin-top: 0.25rem;
    color: rgba(244, 245, 237, 0.75);
  }
`;
