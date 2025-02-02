import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaintingsPage from './PaintingsPage';
import Hing from './Hing'; // The Hing component you referenced

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<PaintingsPage />} />
        <Route path="/hing" element={<Hing />} />
      </Routes>
    </Router>
  );
}

export default App;
