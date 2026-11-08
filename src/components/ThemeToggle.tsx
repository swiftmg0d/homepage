import { useTheme } from '../lib/theme';
import { button, icons } from '../styles/theme-toggle';
import { Moon, Sun } from './icons';

export function ThemeToggle() {
  const { mode, toggle } = useTheme();
  return (
    <button
      type='button'
      data-keep-open
      className={button}
      aria-label='Toggle dark and light theme'
      onClick={toggle}
    >
      <div className={icons} data-dark={mode === 'dark'}>
        <Sun className='sun' />
        <Moon className='moon' />
      </div>
    </button>
  );
}
