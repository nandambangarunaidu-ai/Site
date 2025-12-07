import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on any navigation change (pathname, search, hash, or key)
    const scrollToTop = () => {
      try {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
        // also clear any element scroll positions
        if (document && document.documentElement) document.documentElement.scrollTop = 0;
        if (document && document.body) document.body.scrollTop = 0;
        const main = document.querySelector('main');
        if (main) (main as HTMLElement).scrollTop = 0;
      } catch (e) {
        // ignore
      }
    };

    // Run after a microtask to allow the new route to render first
    const id = window.setTimeout(scrollToTop, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search, location.hash, (location as any).key]);

  return null;
}
