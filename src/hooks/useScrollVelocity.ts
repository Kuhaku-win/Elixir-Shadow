import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook: useScrollVelocity
 * Calculates instantaneous vertical scroll velocity and smooth damped tilt angle.
 * Used for liquid inertia and parallax animations on cocktail cards.
 */
export function useScrollVelocity(maxAngle = 10): number {
  const [tiltAngle, setTiltAngle] = useState<number>(0);
  const lastScrollY = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const targetAngleRef = useRef<number>(0);
  const currentAngleRef = useRef<number>(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastScrollY.current = window.scrollY;
    lastTime.current = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime.current);
      const dy = window.scrollY - lastScrollY.current;

      // Calculate instantaneous velocity (px/ms)
      const velocity = dy / dt;
      
      // Map velocity to clamped tilt angle
      const calculatedAngle = Math.max(-maxAngle, Math.min(maxAngle, velocity * 12));
      targetAngleRef.current = calculatedAngle;

      lastScrollY.current = window.scrollY;
      lastTime.current = now;
    };

    // Smooth spring physics interpolation loop
    const updatePhysics = () => {
      // Damped spring ease: lerp current angle to target angle
      currentAngleRef.current += (targetAngleRef.current - currentAngleRef.current) * 0.15;
      
      // Decay target towards 0 (gravity rest)
      targetAngleRef.current *= 0.88;

      if (Math.abs(currentAngleRef.current) > 0.01) {
        setTiltAngle(Number(currentAngleRef.current.toFixed(2)));
      } else if (currentAngleRef.current !== 0) {
        currentAngleRef.current = 0;
        setTiltAngle(0);
      }

      rafId.current = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [maxAngle]);

  return tiltAngle;
}
