import { useLocation, useNavigate } from '@tanstack/react-router';
import { hotspots, type Hotspot } from '../content';

export function useActiveSpot() {
  const hash = useLocation({ select: (l) => l.hash });
  const navigate = useNavigate();
  const index = hotspots.findIndex((h) => h.id === hash);
  const active: Hotspot | undefined = hotspots[index];

  const open = (id: string | null) =>
    navigate({
      hash: id ?? undefined,
      replace: Boolean(active),
      resetScroll: false,
    });

  const step = (dir: 1 | -1) =>
    open(hotspots[(index + dir + hotspots.length) % hotspots.length].id);

  return { active, open, step };
}
