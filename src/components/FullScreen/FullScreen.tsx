import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMedia } from '../../hooks/useMedia';
import Header from '../Header/Header';
import './FullScreen.css';
import RefreshButton from '../RefreshButton/RefreshButton';

const FullScreen: React.FC = () => {
  const { media } = useMedia();
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('ended', () => {
        navigate('/menu');
      });
    }
  }, [navigate]);

  const videoRef = React.useRef(null);

  return (
    <div className="full-screen">
      <Header videoRef={videoRef} />
      <video ref={videoRef} autoPlay>
        <source src={media || ''} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <RefreshButton />
    </div>
  );
};

export default FullScreen;
