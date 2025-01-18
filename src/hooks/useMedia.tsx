import { useContext } from 'react';
import { MediaContext } from '../contexts/MediaContext';

export const useMedia = () => useContext(MediaContext);
