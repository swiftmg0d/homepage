import { css } from 'goober';
import { canopy, overline } from './mixins';
import { colors, ease, radius } from './tokens';

const RATIO = 342 / 876;

export const stage = css`
  display: grid;
  grid-template: minmax(0, 1fr) / minmax(0, 1fr);
  padding: 0 1.5rem;
`;

export const pending = css`
  opacity: 0;
`;

export const figure = css`
  grid-area: 1 / 1;
  place-self: center;
  position: relative;
  aspect-ratio: ${RATIO};
  height: min(100%, 62dvh);
  max-width: 100%;

  .photo {
    position: absolute;
    inset: 0;
    filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    user-select: none;
  }
`;

export const dot = css`
  position: absolute;
  width: 2rem;
  height: 2rem;
  margin: -1rem 0 0 -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius.full};

  &::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-radius: ${radius.full};
    background: ${colors.forest};
    border: 2px solid ${colors.cream};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
    transition:
      transform 200ms ${ease.standard},
      background 200ms;
  }
  &:hover::before {
    transform: scale(1.25);
  }
  &::after {
    ${canopy}
    ${overline}
    content: attr(aria-label);
    position: absolute;
    left: calc(100% - 0.25rem);
    top: 50%;
    transform: translateY(-50%);
    padding: 0.25rem 0.5rem;
    border-radius: ${radius.sm};
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 150ms ease-out;
  }
  @media (hover: hover) {
    &[aria-expanded='false']:hover::after {
      opacity: 1;
    }
  }
  &[aria-expanded='false']:focus-visible::after {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  &:focus-visible::before {
    box-shadow: 0 0 0 3px rgba(244, 245, 237, 0.6);
  }
  &[aria-expanded='true']::before {
    background: ${colors.cream};
    border-color: ${colors.forest};
    transform: scale(1.4);
  }
`;
