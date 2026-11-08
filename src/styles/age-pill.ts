import { css } from 'goober';
import { glass, pressable } from './mixins';
import { ease, fonts } from './tokens';

export const pill = css`
  ${glass('rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.15)')}
  ${pressable}
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  overflow: hidden;
  user-select: none;
  padding: 0.125rem 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font: 500 10px/1.5 ${fonts.display};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: all 200ms ${ease.standard};

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  .lbl {
    font: 600 9px/1.5 ${fonts.body};
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.6);
  }
  .num {
    font-family: ${fonts.mono};
    font-weight: 500;
    letter-spacing: normal;
    color: #fff;
    font-variant-numeric: tabular-nums;
  }
`;
