import { css } from 'goober';
import { overline } from './mixins';
import { ease } from './tokens';

export const row = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
  transition: color 700ms ${ease.out};

  .rule {
    width: 1px;
    height: 0.875rem;
    background: currentColor;
    opacity: 0.3;
  }
  .meta {
    ${overline}
    opacity: 0.7;
  }
  .meta time {
    font-variant-numeric: tabular-nums;
    margin-left: 0.375rem;
  }
`;
