import React from 'react';

const Bow = ({ flipped }) => (
  <svg className="bow-icon" viewBox="0 0 100 100" style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}>
    <path d="M50,50 Q20,30 15,50 Q20,70 50,50" />
    <path d="M50,50 Q80,30 85,50 Q80,70 50,50" />
    <path d="M50,50 Q40,80 30,95" />
    <path d="M50,50 Q60,80 70,95" />
    <circle cx="50" cy="50" r="5" fill="#d4b4a3" />
  </svg>
);

const ScallopedHeart = () => (
  <svg width="120" height="120" viewBox="0 0 100 100" style={{ margin: '10px' }}>
    <path d="M50,85 L47,82 C22,58 10,43 10,28 C10,13 22,5 35,5 C43,5 47,9 50,14 C53,9 57,5 65,5 C78,5 90,13 90,28 C90,43 78,58 53,82 Z" 
          fill="none" stroke="#c0b5af" strokeWidth="6" strokeDasharray="3 6" strokeLinecap="round" />
    <path d="M50,80 L48,78 C25,56 15,42 15,28 C15,16 24,9 35,9 C42,9 46,13 50,18 C54,13 58,9 65,9 C76,9 85,16 85,28 C85,42 75,56 52,78 Z" 
          fill="#d5cdc7" />
    <circle cx="50" cy="18" r="1.5" fill="#2a1b1a" />
  </svg>
);

export default function Hearts({ onNext, onBack }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="special-header">
        <Bow />
        <h1 className="script-title" style={{ margin: 0 }}>Special for you</h1>
        <Bow flipped />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '30px' }}>
        <ScallopedHeart />
        <ScallopedHeart />
        <ScallopedHeart />
      </div>
      <p style={{ color: '#ffccd5', fontSize: '1.2rem', marginBottom: '20px' }}>
        Un petit quelque chose avec beaucoup d'amour...
      </p>
      <div className="navigation-buttons">
        <button className="btn-magical btn-back" onClick={onBack}>← Retour</button>
        <button className="btn-magical" onClick={onNext}>Suivant →</button>
      </div>
    </div>
  );
}