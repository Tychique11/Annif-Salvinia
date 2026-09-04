import React from 'react';

export default function Music({ onBack }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="script-title">Cette Chanson est pour Toi</h1>
      <p className="sub-title">Ayra Starr & Lojay — Love Don't Cost A Dime</p>

      <div className="lace-frame video-wrapper" style={{ margin: '0 auto' }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jeMYgIfNwD8?si=V_RipKMa82oYILh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <button className="btn-magical btn-back" onClick={onBack}>← Retour</button>
    </div>
  );
}