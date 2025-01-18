import React from 'react';
import './RefreshButton.css';

const RefreshButton: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button className="refresh-button" onClick={handleRefresh}>
      Refresh
    </button>
  );
};

export default RefreshButton;
