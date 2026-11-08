import { css } from 'goober';
import { controlBox, glass, icon14, pressable } from './mixins';
import { ease } from './tokens';

export const button = css`
  ${controlBox}
  ${glass('rgba(55, 75, 57, 0.12)', 'rgba(55, 75, 57, 0.28)')}
  ${pressable}
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px, rgba(255, 255, 255, 0.4) 0 1px 0 inset;
  user-select: none;
  transition: all 300ms ${ease.standard};
`;

export const icons = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  color: rgb(31, 44, 33);
  ${icon14}

  svg {
    transition: all 300ms ${ease.standard};
  }
  .moon {
    position: absolute;
    inset: 0;
    margin: auto;
    color: #6ee7b7;
    transform: scale(0.5) rotate(-90deg);
    opacity: 0;
  }
  &[data-dark='true'] .sun {
    transform: scale(0.5) rotate(90deg);
    opacity: 0;
  }
  &[data-dark='true'] .moon {
    transform: none;
    opacity: 1;
  }
`;
