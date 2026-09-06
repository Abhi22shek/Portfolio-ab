import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypingText = ({
  words,
  className = '',
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2500,
}: TypingTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex] || '';
    let pauseTimer: ReturnType<typeof setTimeout> | null = null;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing next character
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            // Pause at full word before deleting
            pauseTimer = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deleting character
          if (displayText.length > 0) {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      clearTimeout(timeout);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [displayText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center min-h-[1.2em] ${className}`}>
      {/* Zero-width space preserves line height when displayText is empty */}
      <span>{displayText || '\u200B'}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className='inline-block w-[3px] h-[0.9em] bg-primary ml-1.5 align-middle rounded-full shrink-0'
        aria-hidden='true'
      />
    </span>
  );
};

export default TypingText;
