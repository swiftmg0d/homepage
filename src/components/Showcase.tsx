import { useEffect, useState } from 'react';
import { hotspots } from '../content';
import { motion } from '../styles/motion';
import { dot, figure, pending, stage } from '../styles/showcase';
import { useActiveSpot } from '../lib/useActiveSpot';
import { InfoCard } from './InfoCard';

export function Showcase() {
  const { active, open, step } = useActiveSpot();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') open(null);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    const onPointer = (e: PointerEvent) => {
      if (
        !(e.target as Element).closest(
          '[data-hotspot], dialog, [data-keep-open]',
        )
      )
        open(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  });

  return (
    <div className={stage}>
      <div className={`${figure} ${loaded ? motion.rise : pending}`}>
        <div className='photo'>
          <img
            ref={(el) => {
              if (el?.complete) setLoaded(true);
            }}
            src='/runner.webp'
            alt='Running Athlete'
            width={342}
            height={876}
            fetchPriority='high'
            decoding='async'
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </div>
        {loaded &&
          hotspots.map((h) => (
            <button
              key={h.id}
              type='button'
              data-hotspot
              className={dot}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              aria-label={h.label}
              aria-expanded={active?.id === h.id}
              onClick={() => open(active?.id === h.id ? null : h.id)}
            />
          ))}
      </div>
      {active && <InfoCard key={active.id} spot={active} onSwipe={step} />}
    </div>
  );
}
