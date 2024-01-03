import React, { useRef, useEffect } from 'react';
import './SpacingSection.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the plugin (only needs to be done once)
gsap.registerPlugin(ScrollTrigger);

function SpacingSection() {
  // Create refs for the elements you want to animate
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Make sure the elements are available
    if (titleRef.current && paragraphRef.current) {
      // GSAP animations with ScrollTrigger
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true
        },
        y: 200, // example animation
      });

      gsap.to(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true
        },
        y: 200, // example animation
      });
    }
  }, []);

  return (
    <div className="spacing-container">
      <div className="spacing-title" ref={titleRef}>
        <h1>Spacing</h1>
      </div>
      <p ref={paragraphRef}>
        Delve into the core elements of spatial harmony, visual balance, and compelling layouts in monochromatic tones. Explore how mastering design without color lays the groundwork for more impactful and dynamic creations, transforming the addition of color into a powerful tool for enhancing visual storytelling.
      </p>
    </div>
  );
}

export default SpacingSection;
