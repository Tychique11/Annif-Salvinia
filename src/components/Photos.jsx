import React from 'react';

export default function Photos({ onBack }) {
  return (
    <div className="pyramid-container">
      <h1 className="script-title">Tes Souvenirs Magiques</h1>

      {/* Rangée 1 : 1 photo */}
      <div className="pyramid-row">
        <div className="lace-frame photo-card">
          <img src="/images/photo1.jpg" alt="Salvinia 1" />
        </div>
      </div>

      {/* Rangée 2 : 2 photos */}
      <div className="pyramid-row">
        <div className="lace-frame photo-card"><img src="/images/photo2.jpg" alt="Salvinia 2" /></div>
        <div className="lace-frame photo-card"><img src="/images/photo3.jpg" alt="Salvinia 3" /></div>
      </div>

      {/* Rangée 3 : 3 photos */}
      <div className="pyramid-row">
        <div className="lace-frame photo-card"><img src="/images/photo4.jpg" alt="Salvinia 4" /></div>
        <div className="lace-frame photo-card"><img src="/images/photo5.jpg" alt="Salvinia 5" /></div>
        <div className="lace-frame photo-card"><img src="/images/photo6.jpg" alt="Salvinia 6" /></div>
      </div>

      {/* Rangée 4 : 4 photos */}
      <div className="pyramid-row">
        <div className="lace-frame photo-card"><img src="/images/photo7.jpg" alt="Salvinia 7" /></div>
        <div className="lace-frame photo-card"><img src="/images/photo8.jpg" alt="Salvinia 8" /></div>
        <div className="lace-frame photo-card"><img src="/images/photo9.jpg" alt="Salvinia 9" /></div>
        <div className="lace-frame photo-card"><img src="/images/photo10.jpg" alt="Salvinia 10" /></div>
      </div>

      <button className="btn-magical btn-back" onClick={onBack}>← Retour</button>
    </div>
  );
}