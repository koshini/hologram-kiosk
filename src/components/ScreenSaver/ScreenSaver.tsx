import React from 'react';
import './ScreenSaver.css';
import { useNavigate } from 'react-router-dom';
import RefreshButton from '../RefreshButton/RefreshButton';

interface Props {
  mediaSrc: string;
}

const ScreenSaver: React.FC<Props> = ({ mediaSrc }) => {
  const navigate = useNavigate();

  return (
    <div className="video-container" onClick={() => navigate('/menu')}>
      <video autoPlay loop>
        <source src={mediaSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <RefreshButton />
    </div>
  );
};

export default ScreenSaver;
