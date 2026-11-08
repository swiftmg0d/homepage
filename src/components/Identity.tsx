import { block } from '../styles/identity';
import { profile } from '../content';
import { AgePill } from './AgePill';

export function Identity({ className }: { className?: string }) {
  return (
    <div className={`${block} ${className ?? ''}`}>
      <h1>{profile.name}</h1>
      <div className='row'>
        <AgePill />
      </div>
      <div className='row'>
        <p className='role'>{profile.role}</p>
        <span className='sep'>•</span>
        <p className='role'>
          <a
            href={profile.company.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {profile.company.name}
          </a>
        </p>
      </div>
    </div>
  );
}
