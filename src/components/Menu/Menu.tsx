import React from 'react';
import Grid from '../Grid/Grid';
import ContentTile from '../ContentTile/ContentTile';
import './Menu.css';
import RefreshButton from '../RefreshButton/RefreshButton';

const Menu: React.FC = () => {
  const videoPlaceHolder =
    'https://v.ftcdn.net/02/34/91/38/700_F_234913881_7QZa7omFvcHHXRslRof7vijwDllrxOyv_ST.mp4';
  return (
    <div>
      <div className="container">
        <div className="top-section">
          <ContentTile width="550px" height="600px"></ContentTile>
          <ContentTile width="600px" height="800px"></ContentTile>
          <ContentTile width="550px" height="600px"></ContentTile>
        </div>
        <div className="main-grid">
          <Grid>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
            <ContentTile mediaSrc={videoPlaceHolder}></ContentTile>
          </Grid>
        </div>
        <div className="footer">
          <ContentTile width="600px" height="300px"></ContentTile>
          <ContentTile width="600px" height="300px"></ContentTile>
        </div>
      </div>
      <RefreshButton />
    </div>
  );
};

export default Menu;
