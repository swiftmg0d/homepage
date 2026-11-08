import { css } from 'goober';
import { ease } from './tokens';

export const page = css`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  height: 100dvh;
  overflow: hidden;
  padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px)
    env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
  transition: all 700ms ${ease.out};
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
`;

export const footer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.5rem 1.75rem;
`;
