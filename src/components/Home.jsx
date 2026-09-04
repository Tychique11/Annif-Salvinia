import React from 'react';
import karel from './karel.png'; 

export default function Home({ onNext }) {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: "'Montserrat', sans-serif",
    },
    leftColumn: {
      flex: '1 1 50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    },
    cakeImage: {
      width: '100%',
      maxWidth: '850px', // Gâteau encore plus grand
      height: 'auto',
      objectFit: 'contain',
    },
    rightColumn: {
      flex: '1 1 50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
    },
    titleHappy: {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '4.5rem',
      margin: '0',
      lineHeight: '1',
      fontWeight: 'normal',
      color: '#ffffff',
    },
    titleBirthday: {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '5.5rem',
      margin: '0',
      lineHeight: '1',
      fontWeight: 'normal',
      color: '#ffffff',
    },
    subtitle: {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '2rem',
      margin: '10px 0 20px 0',
      fontWeight: 'normal',
      color: '#ffffff',
    },
    question: {
      fontSize: '1.2rem',
      marginBottom: '30px',
      maxWidth: '400px',
      lineHeight: '1.5',
      color: '#ffffff',
    },
    buttonGroup: {
      display: 'flex',
      gap: '20px',
    },
    btnMagical: {
      backgroundColor: 'transparent',
      border: '2px solid #ffffff',
      color: '#ffffff',
      padding: '12px 30px',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      textTransform: 'uppercase',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Côté Gauche : Le Gâteau XXL */}
      <div style={styles.leftColumn}>
        <img 
          src={karel} 
          alt="Gâteau d'anniversaire de Salvinia" 
          style={styles.cakeImage} 
        />
      </div>

      {/* Côté Droit : Les Textes et Boutons */}
      <div style={styles.rightColumn}>
        <h1 style={styles.titleHappy}>Joyeux</h1>
        <h1 style={styles.titleBirthday}>Anniversaire</h1>
        
        <h2 style={styles.subtitle}>Salvinia — 27 Ans Aujourd'hui</h2>

        <svg width="200" height="30" viewBox="0 0 200 30" style={{ marginBottom: '20px' }}>
          <path d="M0,15 Q25,0 50,15 T100,15 T150,15 T200,15" fill="none" stroke="#ffffff" strokeWidth="2" />
        </svg>

        <p style={styles.question}>
          Es-tu prête à découvrir ce que je t'ai préparé ?!
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.btnMagical} onClick={onNext}>Oui !</button>
          <button style={styles.btnMagical} onClick={onNext}>Absolument !</button>
        </div>
      </div>

    </div>
  );
}