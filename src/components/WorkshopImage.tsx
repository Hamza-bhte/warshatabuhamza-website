import React, { useState, useEffect } from 'react';
import { DEFAULT_FALLBACK_IMAGE, INLINE_SVG_FALLBACK } from '../assets/workshopImages';

interface WorkshopImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  fallbackSrc?: string;
}

export const WorkshopImage: React.FC<WorkshopImageProps> = ({
  src,
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  onError,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc || INLINE_SVG_FALLBACK);
  const [attempt, setAttempt] = useState<number>(0);

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc || INLINE_SVG_FALLBACK);
    setAttempt(0);
  }, [src, fallbackSrc]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (attempt === 0 && fallbackSrc && currentSrc !== fallbackSrc) {
      setAttempt(1);
      setCurrentSrc(fallbackSrc);
    } else if (attempt < 2 && currentSrc !== INLINE_SVG_FALLBACK) {
      setAttempt(2);
      setCurrentSrc(INLINE_SVG_FALLBACK);
    }

    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};
