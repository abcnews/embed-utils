// lib/react/index.tsx
import { useEffect, useRef, type ReactNode } from 'react';
import { emitResize } from '../core';

interface EmbedWrapperProps {
  children: ReactNode;
  onReady?: () => void;
}

export function EmbedWrapper({ children, onReady }: EmbedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Emit ready signal
    if (onReady) {
      onReady();
    }

    // Set up ResizeObserver to auto-emit height changes
    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      emitResize(height);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onReady]);

  return <div ref={ref}>{children}</div>;
}

// Re-export core functions for convenience
export * from '../core';
