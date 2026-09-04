import React from 'react';

export default function Home({ onNext }) {
  return (
    <div className="cake-card">
      <h1 className="script-title">Joyeux Anniversaire</h1>
      <h2 className="sub-title">Salvinia — 27 Ans Aujourd'hui</h2>

      <div className="cake-svg-container">
        <svg viewBox="0 0 300 300" width="100%" height="100%">
          {/* Ombrage du socle */}
          <ellipse cx="150" cy="255" rx="90" ry="15" fill="#e0b1cb" opacity="0.4" />

          {/* --- Étage du bas (Socle large) --- */}
          <path d="M 70 240 L 230 240 L 220 190 L 80 190 Z" fill="#f8edeb" stroke="#d4af37" strokeWidth="2.5" />
          {/* Glaçage et décorations dentelle étage bas */}
          <path d="M 80 190 Q 150 205 220 190 Z" fill="#ffb5a7" />
          <path d="M 70 240 Q 80 250 90 240 Q 100 250 110 240 Q 120 250 130 240 Q 140 250 150 240 Q 160 250 170 240 Q 180 250 190 240 Q 200 250 210 240 Q 220 250 230 240" fill="none" stroke="#fff" strokeWidth="3" />

          {/* --- Étage du milieu --- */}
          <path d="M 95 190 L 205 190 L 195 140 L 105 140 Z" fill="#ffe5ec" stroke="#d4af37" strokeWidth="2.5" />
          {/* Coulures de glaçage étage milieu */}
          <path d="M 105 140 Q 150 155 205 140 Z" fill="#f4acb7" />
          <path d="M 95 190 Q 105 198 115 190 Q 125 198 135 190 Q 145 198 155 190 Q 165 198 175 190 Q 185 198 195 190 Q 205 198 215 190" fill="none" stroke="#fff" strokeWidth="2.5" />

          {/* --- Étage du haut --- */}
          <path d="M 120 140 L 180 140 L 175 95 L 125 95 Z" fill="#ffb5a7" stroke="#d4af37" strokeWidth="2.5" />
          <path d="M 125 95 Q 150 105 180 140 Z" fill="#f8edeb" opacity="0.3" />

          {/* --- Bougies et flammes féeriques --- */}
          <g>
            {[135, 150, 165].map((x, i) => (
              <g key={i}>
                <rect x={x - 3} y="65" width="6" height="32" fill="#f4acb7" rx="2" stroke="#d4af37" strokeWidth="1" />
                {/* Rayures des bougies */}
                <line x1={x - 3} y1="73" x2={x + 3} y2="70" stroke="#fff" strokeWidth="1.5" />
                <line x1={x - 3} y1="83" x2={x + 3} y2="80" stroke="#fff" strokeWidth="1.5" />
                {/* Mèche */}
                <line x1={x} y1="65" x2={x} y2="61" stroke="#333" strokeWidth="1.5" />
                {/* Flamme */}
                <ellipse className="flame" cx={x} cy="53" rx="5" ry="9" fill="#ffd166" />
                <ellipse cx={x} cy="54" rx="2" ry="4" fill="#ff9f1c" />
              </g>
            ))}
          </g>
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