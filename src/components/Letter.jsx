import React, { useState, useEffect } from 'react';

export default function Letter({ onBack }) {
  const fullText = `Joyeux 27ème anniversaire, dada Salvinia 🥹 !

Je ne saurai comment te remercier pour tout ce que tu fais. Tu es toujours là, de toutes les manières possibles, à la moindre minute où l'on a besoin de toi. 

Tu sais toujours écouter, panser les trucs et nous porter, même s'il ne te reste que ton dernier billet en poche. Tu ne comptes jamais quand il s'agit de tendre la main.

Quoi qu'il arrive, tu réponds toujours présente... Merci d'être tout simplement toi. ✨💖`;

  const [displayedText, setDisplayedText] = useState('');

  // Animation fluide style machine à écrire
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 35); // Vitesse un peu plus fluide et agréable

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <h1 className="script-title">Une Douce Lettre</h1>

      {/* Conteneur principal avec beaucoup d'espace pour détacher la lettre */}
      <div className="letter-section-container" style={{ margin: '40px auto 30px auto' }}>
        {/* Parchemin de la lettre */}
        <div className="letter-card">
          <div className="letter-text" style={{ whiteSpace: 'pre-line', minHeight: '280px' }}>
            {displayedText}
          </div>
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