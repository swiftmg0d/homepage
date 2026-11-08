import { colors, fonts, radius } from './tokens';

export const glass = (background: string, border: string) => `
  background: ${background};
  border: 1px solid ${border};
  border-radius: ${radius.xl};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const pressable = `
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  }
`;

export const controlBox = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
`;

export const icon14 = `
  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

export const canopy = `
  background: ${colors.forest};
  color: ${colors.cream};
  border: 1px solid ${colors.forestLine};
`;

export const overline = `
  font: 600 11px/14px ${fonts.body};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const caption = `
  font: 500 11px/14px ${fonts.body};
  letter-spacing: 0.08em;
`;

export const bodySm = (weight: 400 | 600 = 400) => `
  font: ${weight} 14px/20px ${fonts.body};
`;
