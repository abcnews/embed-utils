import { useEffect, useRef, type ReactNode } from 'react';
import { emitResize } from '../core';

export function EmbedWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      emitResize(entries[0].contentRect.height);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
