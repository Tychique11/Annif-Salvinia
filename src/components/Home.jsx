import React from 'react';

export default function Home({ onNext }) {
  return (
    <div className="cake-card">
      <h1 className="script-title">Joyeux Anniversaire</h1>
      <h2 className="sub-title">Salvinia — 27 Ans Aujourd'hui</h2>

      <div className="cake-svg-container">
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          {/* Bougies et flammes féeriques */}
          <g>
            {[50, 75, 100, 125, 150].map((x, i) => (
              <g key={i}>
                <rect x={x - 3} y="55" width="6" height="30" fill="#f4acb7" rx="2" />
                <ellipse className="flame" cx={x} cy="48" rx="4" ry="8" fill="#ffd166" />
              </g>
            ))}
          </g>
          {/* Gâteau de mariage / anniversaire à étages */}
          <path d="M 30 150 L 170 150 L 160 115 L 40 115 Z" fill="#ffe5ec" stroke="#d4af37" strokeWidth="2" />
          <path d="M 45 115 L 155 115 L 145 85 L 55 85 Z" fill="#ffb5a7" stroke="#d4af37" strokeWidth="2" />
          <path d="M 20 180 L 180 180 L 170 150 L 30 150 Z" fill="#f8edeb" stroke="#d4af37" strokeWidth="2" />
          {/* Décorations dentelle du gâteau */}
          <path d="M 20 180 Q 30 190 40 180 Q 50 190 60 180 Q 70 190 80 180 Q 90 190 100 180 Q 110 190 120 180 Q 130 190 140 180 Q 150 190 160 180 Q 170 190 180 180" fill="none" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>

      <p style={{ fontFamily: 'Dancing Script', fontSize: '1.8rem', marginBottom: '20px', color: '#ffccd5' }}>
        Es-tu prête à découvrir ce que je t'ai préparé ?
      </p>

      <div>
        <button className="btn-magical" onClick={onNext}>Oui !</button>
        <button className="btn-magical" onClick={onNext}>Absolument !</button>
      </div>
    </div>
  );
}