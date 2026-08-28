import { useRef, useCallback } from 'react';

/**
 * Custom Hook: useMouseSpotlight
 * Calculates cursor coordinates relative to a card/element container
 * and updates CSS variables `--mouse-x` and `--mouse-y` for realistic specular highlights.
 */
export function useMouseSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const elementRef = useRef<T>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    elementRef.current.style.setProperty('--mouse-x', `${x}px`);
    elementRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  return { elementRef, handleMouseMove };
}
