import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

const TypewriterEffect = () => {
  const words = ['Reading!', 'Knowledge!', 'Learning!', 'Research!'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (isPaused) {
      // Pause at the end of each complete word
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 3000); // 3 second pause
    } else if (isDeleting) {
      // Deleting characters
      if (currentText === '') {
        // Move to next word when deletion is complete
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 100); // Deletion speed
      }
    } else {
      // Typing characters
      if (currentText === currentWord) {
        // Word is complete, start pause
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 100); // Typing speed
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words]);

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Main heading with typewriter effect */}
      <div style={{
        fontSize: 'clamp(1rem, 5vw, 3rem)', 
        fontWeight: 'bold',
        marginBottom: '2rem',
        lineHeight: '1.2'
      }}>
        <span>Make the Most of Your</span>
        <div style={{
          color: 'white',
          textShadow: '0 0 20px rgba(0, 210, 255, 0.6)'
        }}>
          <span style={{ 
            borderRight: '3px solid white',
            paddingRight: '8px',
            animation: 'blink 1s infinite'
          }}>
            {currentText}
          </span>
        </div>
      </div>

      {/* Description paragraph */}
      <p style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
        lineHeight: '1.6',
        color: 'rgba(255, 255, 255, 0.9)',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
        margin: '0',
        fontWeight: '400',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Limitless possibilities with your entire eBook collection accessible on any device, 
        any time and any where. Easily, upload, organize, read, share and sync your eBooks with BookFusion.
      </p>
      <div>
        <Link className='button--primary' to="/docs/introduction/what-is-bookfusion">
            Get Started!
        </Link>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { border-color: white; }
          51%, 100% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
};

export default TypewriterEffect;