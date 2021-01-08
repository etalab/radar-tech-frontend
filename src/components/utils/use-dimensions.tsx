import { useEffect, useRef, useState } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

import { combineChartDimensions } from './combine-dimensions';

type Dimensions = {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  boundedHeight?: number;
  boundedWidth?: number;
  height?: number;
  width?: number;
};

// calcule les dimensions utilisables par le graphique.
// ce dernier est contenu dans cette <div> l'englobant (.Chart__wrapper),
// dont la ref est passée à cette fonction.
// au-delà de la sauvegarde temporaire en state, c'est le return de
// newSettings, un objet dont la définition est plus haut, qui est importante
export const calculateChartDimensions = (
  passedSettings: Dimensions,
  ref: React.MutableRefObject<HTMLDivElement>
): [React.MutableRefObject<HTMLDivElement>, Dimensions] => {
  const dimensions = combineChartDimensions(passedSettings);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // commenting this out for now
    // this removes support for fixes width/height chart
    //if (dimensions.width && dimensions.height) return [ref, dimensions];

    const element = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) return;
      if (!entries.length) return;
      const entry = entries[0];
      if (width !== entry.contentRect.width) setWidth(entry.contentRect.width);
      if (height !== entry.contentRect.height)
        setHeight(entry.contentRect.height);
    });
    resizeObserver.observe(element);
    return () => resizeObserver.unobserve(element);
  }, []);

  const newSettings: Dimensions = combineChartDimensions({
    ...dimensions,
    width: dimensions.width || width,
    height: dimensions.height || height,
  });
  return [ref, newSettings];
};
