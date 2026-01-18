'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollY + viewportHeight >= docHeight - 2;

      if (isAtBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find the section whose top is closest to the reading line (offset)
      // but hasn't scrolled too far past it.
      let currentActive = sectionIds[0];
      
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset + 20) {
            currentActive = id;
          } else {
            // Since sections are in order, we can stop here
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
