import React, { useState } from 'react';
import Home from './components/Home';
import Selection from './components/Selection';
import Photos from './components/Photos';
import Music from './components/Music';
import Letter from './components/Letter';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="magical-container">
      <div className="sparkle-bg"></div>

      {currentView === 'home' && <Home onNext={() => setCurrentView('selection')} />}
      {currentView === 'selection' && <Selection onSelect={(view) => setCurrentView(view)} />}
      {currentView === 'photos' && <Photos onBack={() => setCurrentView('selection')} />}
      {currentView === 'music' && <Music onBack={() => setCurrentView('selection')} />}
      {currentView === 'letter' && <Letter onBack={() => setCurrentView('selection')} />}
    </div>
  );
}