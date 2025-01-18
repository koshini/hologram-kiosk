import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMedia } from '../../hooks/useMedia';

interface Props {
  mediaSrc?: string;
  width?: string;
  height?: string;
  videoId?: string;
}

const ContentTile: React.FC<Props> = ({
  mediaSrc,
  width = '440px',
  height = '782px',
}) => {
  const navigate = useNavigate();
  const { media, setMedia } = useMedia();

  const handleClick = () => {
    console.log(mediaSrc);
    setMedia(mediaSrc);
    console.log({ media });
    navigate('/full-screen');
  };

  return (
    <div style={{ width, height }} onClick={handleClick}>
      <video autoPlay loop>
        <source src={mediaSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ContentTile;
