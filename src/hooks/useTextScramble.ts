import { useState, useCallback, useRef } from 'react';

const CIPHER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§±#%&*+?@~';

/**
 * Custom Hook: useTextScramble
 * Provides a futuristic, high-fashion decryption scramble animation on hover.
 */
export function useTextScramble(finalText: string, speedMs = 25) {
  const [displayText, setDisplayText] = useState(finalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const trigger = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    const maxIterations = finalText.length;

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ' || index < iteration) {
              return finalText[index];
            }
            return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(finalText);
      }

      iteration += 1 / 2;
    }, speedMs);
  }, [finalText, speedMs]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(finalText);
  }, [finalText]);

  return { displayText, trigger, reset };
}
