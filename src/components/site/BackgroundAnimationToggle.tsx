import { useState, useEffect } from "react";

interface BackgroundAnimationToggleProps {
  className?: string;
}

let toggleBackgroundAnimation: (enabled: boolean) => void;

const BackgroundAnimationToggle = ({ className = "" }: BackgroundAnimationToggleProps) => {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    toggleBackgroundAnimation = (enabled: boolean) => {
      setIsAnimated(enabled);
      const rootElement = document.documentElement;
      if (enabled) {
        rootElement.classList.add('background-animated');
      } else {
        rootElement.classList.remove('background-animated');
      }
    };

    // Initialize animation state
    if (isAnimated) {
      document.documentElement.classList.add('background-animated');
    }

    return () => {
      document.documentElement.classList.remove('background-animated');
    };
  }, [isAnimated]);

  return null; // This component doesn't render anything visible
};

// Export the toggle function to the global scope
if (typeof window !== 'undefined') {
  (window as any).toggleBackgroundAnimation = (enabled: boolean) => {
    if (toggleBackgroundAnimation) {
      toggleBackgroundAnimation(enabled);
    }
  };
}

export default BackgroundAnimationToggle;