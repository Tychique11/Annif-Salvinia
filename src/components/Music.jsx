import React from 'react';
// 1. On importe la vidéo depuis le dossier assets (assurez-vous que le chemin est bon)
import maVideo from './ma-video.mp4'; 

export default function Music({ onBack }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="script-title">Cette video est pour Toi</h1>
      

      <div className="lace-frame video-wrapper" style={{ margin: '0 auto' }}>
        {/* 2. On remplace l'iframe par la balise video */}
        <video 
          width="560" 
          height="315" 
          controls 
          autoPlay 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        >
          <source src={maVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
      </div>

      <button className="btn-magical btn-back" onClick={onBack}>← Retour</button>
    </div>
  );
}