import React from 'react';
// On importe la vidéo depuis le dossier assets (assurez-vous que le chemin est bon)
import maVideo from './ma-video.mp4'; 

export default function Music({ onBack }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 className="script-title">Cette video est pour Toi</h1>
      

      <div className="lace-frame video-wrapper" style={{ margin: '30px auto 20px auto', maxWidth: '900px' }}>
        {/* Vidéo agrandie, centrée et espacée du texte */}
        <video 
          controls 
          autoPlay 
          style={{ 
            width: '100%', 
            maxHeight: '550px', 
            objectFit: 'cover', 
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}
        >
          <source src={maVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
      </div>

      <br />
      <button className="btn-magical btn-back" onClick={onBack}>← Retour</button>
    </div>
  );
}