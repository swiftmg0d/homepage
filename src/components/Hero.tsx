import { gradients } from '../styles/tokens';
import { footer, header, page } from '../styles/hero';
import { useTheme } from '../lib/theme';
import { motion } from '../styles/motion';
import { Masthead } from './Masthead';
import { ThemeToggle } from './ThemeToggle';
import { Identity } from './Identity';
import { SocialLinks } from './SocialLinks';
import { Showcase } from './Showcase';

export function Hero() {
  const { mode } = useTheme();
  return (
    <main className={page} style={{ background: gradients[mode] }}>
      <header className={`${header} ${motion.fadeIn(200)}`}>
        <Masthead />
        <ThemeToggle />
      </header>
      <Showcase />
      <footer className={footer}>
        <Identity className={motion.fadeUp(550)} />
        <SocialLinks className={motion.fadeUp(750)} />
      </footer>
    </main>
  );
}
