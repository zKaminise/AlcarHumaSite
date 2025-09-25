import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: "fade-in-up" | "slide-in-left" | "slide-in-right" | "fade-in-scale" | "slide-in-up" | "bounce-in";
  delay?: number;
  duration?: number;
}

const ScrollAnimation = ({ 
  children, 
  className = "", 
  animationType = "fade-in-up",
  delay = 0,
  duration = 800
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, delay);
          }
        });
      },
      {
        threshold: 0.05, // Trigger earlier for smoother experience
        rootMargin: "0px 0px -5% 0px", // More generous trigger area
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animationType} ${className}`}
      style={{
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;