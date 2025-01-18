import { useState } from 'react';
import { MediaContext } from '../contexts/MediaContext';

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [media, setMedia] = useState<string | null>(null);

  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  );
};
