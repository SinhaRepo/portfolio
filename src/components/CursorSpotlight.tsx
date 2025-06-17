
import { useState, useEffect } from 'react';

const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame: number;

    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth animation
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(147, 197, 253, 0.15) 0%, rgba(168, 85, 247, 0.1) 25%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
        borderRadius: '50%',
        mixBlendMode: 'screen',
        filter: 'blur(1px)',
        willChange: 'transform',
      }}
    />
  );
};

export default CursorSpotlight;
