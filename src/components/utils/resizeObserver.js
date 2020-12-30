import { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// observe les changements de dimensions d'une target/cible
// dont la `ref` est fournie à la fonction.
// voire implémentation type dans components/ChartTemplate.js
export const useResizeObserver = ref => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);

    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);

  return dimensions;
};
