import { css, keyframes } from 'goober';
import { ease } from './tokens';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
`;
const rise = keyframes`
  from { opacity: 0; transform: translateY(32px) scale(0.96); filter: blur(8px); }
  to { opacity: 1; transform: none; filter: blur(0); }
`;
const cardIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
`;

const animate = (value: string) => css`
  animation: ${value};
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const motion = {
  fadeIn: (delayMs: number) =>
    animate(`${fadeIn} 800ms ease-out ${delayMs}ms both`),
  fadeUp: (delayMs: number) =>
    animate(`${fadeUp} 800ms ${ease.emphasized} ${delayMs}ms both`),
  rise: animate(`${rise} 1100ms ${ease.emphasized} 150ms both`),
  cardIn: animate(`${cardIn} 250ms ${ease.emphasized} both`),
};
