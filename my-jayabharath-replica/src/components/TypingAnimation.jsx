import React, { useState, useEffect } from "react";
import "./TypingAnimation.css";

const TypingHeading = () => {
  const words = ["Happy Homes", "Since 1993"];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullWord = words[wordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // deleting
        setCurrentWord((prev) => prev.slice(0, -1));
        setTypingSpeed(60);
      } else {
        // typing
        setCurrentWord((prev) => fullWord.slice(0, prev.length + 1));
        setTypingSpeed(120);
      }

      // switch between typing and deleting
      if (!isDeleting && currentWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, typingSpeed, wordIndex, words]);

  return (
    <h1 className="typing-heading">
      Best Builders in Madurai -{" "}
      <span className="typing-span">{currentWord}</span>
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypingHeading;
