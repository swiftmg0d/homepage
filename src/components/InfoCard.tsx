import { useLayoutEffect, useRef } from 'react';
import { card } from '../styles/info-card';
import { motion } from '../styles/motion';
import { hotspots, type Hotspot } from '../content';

const SWIPE_PX = 50;

export function InfoCard({
  spot,
  onSwipe,
}: {
  spot: Hotspot;
  onSwipe: (dir: 1 | -1) => void;
}) {
  const startX = useRef(0);
  const dialog = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const el = dialog.current;
    el?.show();
    return () => el?.close();
  }, []);

  return (
    <dialog
      ref={dialog}
      className={`${card} ${motion.cardIn}`}
      onTouchStart={(e) => {
        startX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > SWIPE_PX) onSwipe(dx < 0 ? 1 : -1);
      }}
      data-placement={spot.y < 50 ? 'bottom' : 'top'}
      aria-label={spot.title}
    >
      <div className='top'>
        <span className='label'>{spot.label}</span>
        <span className='count'>
          {hotspots.indexOf(spot) + 1} / {hotspots.length}
        </span>
      </div>
      <h2>{spot.title}</h2>
      {spot.body && <p className='body'>{spot.body}</p>}
      {spot.items && (
        <ul>
          {spot.items.map((it, i) => (
            <li key={i}>
              <div className='row'>
                {it.href ? (
                  <a
                    className='item'
                    href={it.href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {it.title}
                  </a>
                ) : (
                  <span className='item'>{it.title}</span>
                )}
                {it.meta && <span className='meta'>{it.meta}</span>}
              </div>
              {it.text && <p className='text'>{it.text}</p>}
            </li>
          ))}
        </ul>
      )}
    </dialog>
  );
}
