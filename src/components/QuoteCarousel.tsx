import React from 'react';
import DraggableMarquee from './DraggableMarquee';

/**
 * QuoteCarousel:
 * Upgraded from a static clicking carousel to a fluid, physics-enabled DraggableMarquee.
 * Supports auto-cruising, grabbing & dragging, inertia flicking, and infinite looping.
 */
export default function QuoteCarousel() {
  return (
    <div className="w-full">
      <DraggableMarquee speed={0.65} />
    </div>
  );
}
