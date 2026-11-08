import { css } from 'goober';
import { controlBox, glass, icon14, pressable } from './mixins';
import { ease, radius } from './tokens';

export const bar = css`
  ${glass('rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.1)')}
  ${icon14}
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  a {
    ${controlBox}
    ${pressable}
    border-radius: ${radius.xl};
    color: rgba(255, 255, 255, 0.8);
    transition: all 200ms ${ease.standard};
  }
  a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;
