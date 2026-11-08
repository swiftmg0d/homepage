export const gradients = {
  light:
    'linear-gradient(rgb(221, 225, 196) 0%, rgb(221, 225, 196) 32%, rgb(206, 212, 181) 39%, rgb(188, 196, 162) 45%, rgb(166, 178, 143) 50%, rgb(140, 156, 121) 55%, rgb(113, 133, 99) 60%, rgb(86, 111, 78) 65%, rgb(66, 92, 62) 70%, rgb(55, 75, 57) 76%, rgb(55, 75, 57) 100%)',
  dark: 'linear-gradient(rgb(35, 43, 37) 0%, rgb(28, 36, 30) 25%, rgb(22, 29, 24) 45%, rgb(19, 26, 21) 60%, rgb(15, 23, 18) 78%, rgb(10, 15, 12) 100%)',
} as const;

export const fonts = {
  display: "'Epilogue', sans-serif",
  body: "'Plus Jakarta Sans', sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
} as const;

export const colors = {
  forest: '#374b39',
  cream: '#f4f5ed',
  sage: '#dde1c4',
  forestLine: 'rgba(221, 225, 196, 0.15)',
} as const;

export const ease = {
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  emphasized: 'cubic-bezier(0.22, 1, 0.36, 1)',
} as const;

export const radius = {
  sm: '0.25rem',
  md: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
} as const;
