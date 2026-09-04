import React from 'react';

export default function Selection({ onSelect }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="script-title">Spécialement pour toi</h1>
      <p className="sub-title">Choisis un cœur magique</p>

      <div className="hearts-row">
        <div className="heart-item" onClick={() => onSelect('photos')}>
          <div className="heart-doily">
            <span style={{ fontSize: '2rem' }}>📷</span>
          </div>
          <div className="heart-label">Photos</div>
        </div>

        <div className="heart-item" onClick={() => onSelect('music')}>
          <div className="heart-doily">
            <span style={{ fontSize: '2rem' }}>🎵</span>
          </div>
          <div className="heart-label">Musique</div>
        </div>

        <div className="heart-item" onClick={() => onSelect('letter')}>
          <div className="heart-doily">
            <span style={{ fontSize: '2rem' }}>💌</span>
          </div>
          <div className="heart-label">Lettre</div>
        </div>
      </div>
    </div>
  );
}