import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>We're Under Construction</h1>
        <p style={styles.message}>
          Our website is currently undergoing scheduled maintenance and improvements. Please check back soon for an improved experience!
        </p>
        <div style={styles.iconContainer}>
          🚧
        </div>
        <p style={styles.eta}>Expected Launch: Coming Soon</p>
        <button style={styles.button} onClick={() => window.location.href = '/'}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #3498db, #8e44ad)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '2em',
    maxWidth: '400px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '0.3em',
  },
  message: {
    fontSize: '1.1em',
    lineHeight: '1.5',
    marginBottom: '1em',
  },
  iconContainer: {
    fontSize: '3em',
    margin: '1em 0',
  },
  eta: {
    fontSize: '1em',
    color: '#eee',
    marginBottom: '1.5em',
  },
  button: {
    padding: '0.8em 1.5em',
    fontSize: '1em',
    color: '#3498db',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

// Adding hover effect to button
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  button:hover {
    background-color: #ddd;
  }
`, styleSheet.cssRules.length);




export default App;

