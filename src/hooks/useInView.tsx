import { useInView as useIntersectionObserver } from "react-intersection-observer";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "0px" } = options;
  
  return useIntersectionObserver({
    threshold,
    triggerOnce,
    rootMargin,
  });
};