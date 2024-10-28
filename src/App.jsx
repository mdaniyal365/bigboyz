import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Website Under Construction</h1>
      <p style={styles.message}>
        We're working hard to bring you something awesome. Stay tuned!
      </p>
      <div style={styles.loader}></div>
      <p style={styles.eta}>Estimated Launch: Coming Soon!</p>
      <button style={styles.button} onClick={() => window.location.href = '/'}>
        Return to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    color: '#333',
  },
  title: {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
  },
  message: {
    fontSize: '1.5em',
    marginBottom: '1em',
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '6px solid #ccc',
    borderTop: '6px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '1em',
  },
  eta: {
    fontSize: '1.2em',
    color: '#777',
    marginBottom: '1.5em',
  },
  button: {
    padding: '0.5em 1em',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

// Keyframes for the spinner animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

export default App;

