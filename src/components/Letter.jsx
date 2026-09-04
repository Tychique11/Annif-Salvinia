import React, { useState, useEffect } from 'react';

export default function Letter({ onBack }) {
  const fullText = `Ma chère Salvinia,

Vingt-sept ans aujourd'hui ! C'est un âge magnifique, et je suis si heureux de pouvoir célébrer cette journée si spéciale avec toi.

Que cette nouvelle année de ta vie t'apporte autant de joie, de douceur, de réussite et de féerie que cette petite surprise. Tu es une personne vraiment extraordinaire et précieuse.

Joyeux 27ème anniversaire ! ✨💖`;

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="script-title">Une Douce Lettre</h1>

      <div className="letter-section-container">
        {/* Parchemin de la lettre */}
        <div className="letter-card">
          <div className="letter-text">{displayedText}</div>
        </div>

        {/* Photostrip Polaroid vertical à droite */}
        <div className="photostrip">
          <img className="photostrip-img" src="/images/strip1.jpg" alt="Salvinia strip 1" />
          <img className="photostrip-img" src="/images/strip2.jpg" alt="Salvinia strip 2" />
          <img className="photostrip-img" src="/images/strip3.jpg" alt="Salvinia strip 3" />
          <img className="photostrip-img" src="/images/strip4.jpg" alt="Salvinia strip 4" />
        </div>
      </div>

      <button className="btn-magical btn-back" onClick={onBack}>← Retour</button>
    </div>
  );
}