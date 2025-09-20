import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: "fade-in-up" | "slide-in-left" | "slide-in-right";
  delay?: number;
}

const ScrollAnimation = ({ 
  children, 
  className = "", 
  animationType = "fade-in-up",
  delay = 0 
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
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
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
      className={`${animationType} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;