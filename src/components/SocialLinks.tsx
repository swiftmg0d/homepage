import { socialLinks } from '../content';
import { bar } from '../styles/social-links';

export function SocialLinks({ className }: { className?: string }) {
  return (
    <nav className={`${bar} ${className ?? ''}`} aria-label='Social links'>
      {socialLinks.map(({ label, href, Icon }) => (
        <a key={label} aria-label={label} href={href}>
          <Icon />
        </a>
      ))}
    </nav>
  );
}
