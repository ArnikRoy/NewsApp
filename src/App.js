import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [mode, setMode] = useState('light');
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "bcd8fb6d4e0243eca04ef131e784b501"

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(4, 39, 67)';
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
        </div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general" mode={mode} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} country="in" category="business" mode={mode} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country="in" category="entertainment" mode={mode} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general" mode={mode} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} country="in" category="health" mode={mode} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} country="in" category="science" mode={mode} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} country="in" category="sports" mode={mode} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} country="in" category="technology" mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
