import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop component: when the location pathname changes, scroll window to top.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use a small timeout to wait for route transitions/layout if needed
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
