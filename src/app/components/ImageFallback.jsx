'use client';

import { useState } from 'react';

export default function ImageFallback({ src, alt, className, fallback, ...rest }) {
  const [errored, setErrored] = useState(false);
  const clean = (src || '').trim();

  return (
    <img
      src={errored || !clean ? fallback : clean}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErrored(true)}   // <- allowed here (client)
      {...rest}
    />
  );
}
