import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

interface Props {
  videoRef?: React.RefObject<HTMLVideoElement>;
}

const Header: React.FC<Props> = ({ videoRef }) => {
  const navigate = useNavigate();
  const [showControls, setShowControls] = useState<boolean>(false);

  const handlePause = () => {
    if (videoRef?.current) {
      videoRef.current.pause();
    }
  };

  const handleQuit = () => {
    if (videoRef?.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  const handleVolumeChange = (volume: number) => {
    if (videoRef?.current) {
      videoRef.current.volume = volume;
    }
  };
  const increaseVolume = () => {
    handleVolumeChange(Math.min(videoRef?.current?.volume ?? 0 + 0.1, 1));
  };

  const decreaseVolume = () => {
    handleVolumeChange(Math.max(videoRef?.current?.volume ?? 0 - 0.1, 0));
  };
  const controlButtons = showControls ? (
    <>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleQuit}>Quit</button>
      <button onClick={decreaseVolume}>-</button>
      <button onClick={increaseVolume}>+</button>
      <button onClick={() => setShowControls(false)}> x </button>
    </>
  ) : (
    <button onClick={() => setShowControls(true)}>control buttons</button>
  );

  return (
    <div className="header">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="control-buttons">{controlButtons}</div>
    </div>
  );
};

export default Header;
