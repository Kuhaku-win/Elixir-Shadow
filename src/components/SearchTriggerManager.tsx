import React, { useState, useEffect } from 'react';
import GlobalSearchModal from './GlobalSearchModal';

export default function SearchTriggerManager() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const trigger = document.getElementById('global-search-trigger');
    trigger?.addEventListener('click', handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      trigger?.removeEventListener('click', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <GlobalSearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
  );
}
