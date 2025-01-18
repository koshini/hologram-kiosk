import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScreenSaver from './components/ScreenSaver/ScreenSaver';
import Menu from './components/Menu/Menu';
import FullScreen from './components/FullScreen/FullScreen';
import './App.css';
import { MediaProvider } from './providers/MediaProvider';

const App: React.FC = () => {
  return (
    <MediaProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ScreenSaver mediaSrc="https://v.ftcdn.net/11/57/35/17/700_F_1157351738_qL1vmmbIaYc2KvM1wsHgjMeFYFfsNtB5_ST.mp4" />
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/full-screen" element={<FullScreen />} />
        </Routes>
      </Router>
    </MediaProvider>
  );
};

export default App;
