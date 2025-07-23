'use client';

import { useState, useEffect } from 'react';
import styles from './LoopingTypewriter.module.css'; // You will need to rename the CSS file too

export default function LoopingTypewriter({ fixedText, words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = 150;
    const deleteSpeed = 75;
    const pauseTime = 1500;

    const handleTyping = () => {
      // If deleting, delete one char; otherwise, type one char
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      // Determine the timeout duration
      let timeoutDuration = isDeleting ? deleteSpeed : typeSpeed;

      // If word is fully typed, pause and then start deleting
      if (!isDeleting && text === currentWord) {
        timeoutDuration = pauseTime;
        setIsDeleting(true);
      } 
      // If word is fully deleted, move to the next word
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, 150);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {fixedText}
        <span className={styles.typewriterText}>
          {text}
        </span>
      </h1>
    </div>
  );
}
