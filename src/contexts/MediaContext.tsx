import { createContext } from 'react';

interface MediaContextType {
  media: string | null;
  setMedia: (id: string | null) => void;
}

export const MediaContext = createContext<MediaContextType>({
  media: null,
  setMedia: () => {},
});
