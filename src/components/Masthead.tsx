import { useEffect, useState } from 'react';
import { useTheme } from '../lib/theme';
import { row } from '../styles/masthead';
import { profile } from '../content';

const clock = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: profile.timeZone,
});

function useLocalTime() {
  const [now, setNow] = useState(() => clock.format(new Date()));
  useEffect(() => {
    let timer: number;
    const tick = () => {
      setNow(clock.format(new Date()));
      timer = window.setTimeout(tick, 60_000 - (Date.now() % 60_000));
    };
    timer = window.setTimeout(tick, 60_000 - (Date.now() % 60_000));
    return () => clearTimeout(timer);
  }, []);
  return now;
}

export function Masthead() {
  const { mode } = useTheme();
  const time = useLocalTime();
  return (
    <div
      className={row}
      style={{ color: mode === 'dark' ? '#f4f5ed' : '#374b39' }}
    >
      <span className='rule' />
      <span className='meta'>
        {profile.city}
        <time dateTime={time}>{time}</time>
      </span>
    </div>
  );
}
