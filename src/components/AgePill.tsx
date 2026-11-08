import { useEffect, useRef, useState } from 'react';
import { pill } from '../styles/age-pill';
import { profile } from '../content';

const BIRTH = new Date(profile.birthDate).getTime();
const MS_YEAR = 365.2425 * 24 * 60 * 60 * 1000;
const ageNow = () => (Date.now() - BIRTH) / MS_YEAR;

export function AgePill() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState(() => String(Math.floor(ageNow())));
  const raf = useRef(0);

  useEffect(() => {
    if (!active) {
      setText(String(Math.floor(ageNow())));
      return;
    }
    const tick = () => {
      setText(ageNow().toFixed(8));
      raf.current = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf.current);
  }, [active]);

  const touch =
    typeof matchMedia !== 'undefined' && matchMedia('(hover: none)').matches;

  return (
    <button
      type='button'
      className={pill}
      aria-label='Toggle precise age counter'
      onMouseEnter={() => !touch && setActive(true)}
      onMouseLeave={() => !touch && setActive(false)}
      onFocus={() => !touch && setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => touch && setActive((a) => !a)}
    >
      <span className='lbl'>AGE</span>
      <span className='num'>{text}</span>
    </button>
  );
}
