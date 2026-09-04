import React from 'react';

export default function Photos({ onBack }) {
  // Styles CSS intégrés
  const styles = {
    container: {
      textAlign: 'center',
      padding: '2rem',
    },
    // Bloc du titre détaché avec son propre espacement
    titleSection: {
      marginBottom: '50px', // Espace important pour bien détacher le titre des photos
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '15px',
      flexWrap: 'wrap',
    },
    photoCard: {
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      animation: 'flyIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
    }
  };

  const animationStyles = `
    @keyframes flyIn {
      0% {
        opacity: 0;
        transform: translateY(-150px) scale(0.3) rotate(-15deg);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1) rotate(0deg);
      }
    }
  `;

  const photosData = [
    { src: "/images/photo1.jpg", alt: "Salvinia 1", delay: "0.2s" },
    { src: "/images/photo2.jpg", alt: "Salvinia 2", delay: "0.4s" },
    { src: "/images/photo3.jpg", alt: "Salvinia 3", delay: "0.6s" },
    { src: "/images/photo4.jpg", alt: "Salvinia 4", delay: "0.8s" },
    { src: "/images/photo5.jpg", alt: "Salvinia 5", delay: "1.0s" },
    { src: "/images/photo6.jpg", alt: "Salvinia 6", delay: "1.2s" },
    { src: "/images/photo7.jpg", alt: "Salvinia 7", delay: "1.4s" },
    { src: "/images/photo8.jpg", alt: "Salvinia 8", delay: "1.6s" },
    { src: "/images/photo9.jpg", alt: "Salvinia 9", delay: "1.8s" },
    { src: "/images/photo10.jpg", alt: "Salvinia 10", delay: "2.0s" },
  ];

  return (
    <div style={styles.container}>
      <style>{animationStyles}</style>

      {/* Bloc du titre détaché */}
      <div style={styles.titleSection}>
        <h1 className="script-title">Tes Souvenirs Magiques</h1>
      </div>

      {/* Rangée 1 : 1 photo */}
      <div style={styles.row}>
        <div className="lace-frame" style={{ padding: '5px' }}>
          <img src={photosData[0].src} alt={photosData[0].alt} style={{ ...styles.photoCard, animationDelay: photosData[0].delay }} />
        </div>
      </div>

      {/* Rangée 2 : 2 photos */}
      <div style={styles.row}>
        {[photosData[1], photosData[2]].map((photo, index) => (
          <div key={index} className="lace-frame" style={{ padding: '5px' }}>
            <img src={photo.src} alt={photo.alt} style={{ ...styles.photoCard, animationDelay: photo.delay }} />
          </div>
        ))}
      </div>

      {/* Rangée 3 : 3 photos */}
      <div style={styles.row}>
        {[photosData[3], photosData[4], photosData[5]].map((photo, index) => (
          <div key={index} className="lace-frame" style={{ padding: '5px' }}>
            <img src={photo.src} alt={photo.alt} style={{ ...styles.photoCard, animationDelay: photo.delay }} />
          </div>
        ))}
      </div>

      {/* Rangée 4 : 4 photos */}
      <div style={styles.row}>
        {[photosData[6], photosData[7], photosData[8], photosData[9]].map((photo, index) => (
          <div key={index} className="lace-frame" style={{ padding: '5px' }}>
            <img src={photo.src} alt={photo.alt} style={{ ...styles.photoCard, animationDelay: photo.delay }} />
          </div>
        ))}
      </div>

      <br /><br />
      <button className="btn-magical btn-back" onClick={onBack}>← Retour</button>
    </div>
  );
}