"use client"
import React, { useEffect, useRef } from 'react';
import './Background.css'; // We'll update this CSS

const Background: React.FC = () => {
  // Ref for the main container to calculate relative mouse position
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (!currentContainer) return;

      const rect = currentContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Update CSS variables for the mask position
      currentContainer.style.setProperty('--mouse-x-px', `${x}px`);
      currentContainer.style.setProperty('--mouse-y-px', `${y}px`);
    };

    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
       // Optional: Set initial position (e.g., center) if needed
       // currentContainer.style.setProperty('--mouse-x-px', `${currentContainer.offsetWidth / 2}px`);
       // currentContainer.style.setProperty('--mouse-y-px', `${currentContainer.offsetHeight / 2}px`);
    }

    // Cleanup
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  return (
    // Container receives mouse events
    <div ref={containerRef} className="fixed inset-0 -z-1 overflow-hidden">
      {/* 1. Base Background Color */}
      <div className="absolute inset-0 bg-background"></div>

      {/* 2. Standard Grid (Visible Everywhere) */}
      <div
        className="standard-grid absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:var(--grid-size-standard)_var(--grid-size-standard)]"
      ></div>

      {/* 3. Enlarged Grid (Revealed by Mask Behind Cursor) */}
      <div
        className="enlarged-grid-masked absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color-enlarged,var(--cyber-grid-color))_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color-enlarged,var(--cyber-grid-color))_1px,transparent_1px)] bg-[size:var(--grid-size-enlarged)_var(--grid-size-enlarged)]"
      ></div>
    </div>
  );
};

export default Background;