import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type Mode = 'light' | 'dark';
const KEY = 'theme';

const read = (): Mode | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
};
const system = (): Mode =>
  matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const Ctx = createContext<{ mode: Mode; toggle: () => void }>({
  mode: 'light',
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(() => read() ?? system());

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (!read()) setMode(mq.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () =>
    setMode((m) => {
      const next: Mode = m === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(KEY, next);
      } catch {
        console.warn('Failed to persist theme preference to localStorage');
      }
      return next;
    });

  return <Ctx.Provider value={{ mode, toggle }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);
