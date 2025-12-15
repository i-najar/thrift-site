"use client";

import { useEffect, useState } from "react";

const phrases = [
  "linen pants",
  "your new favorite tote",
  "cool boots",
  "a mysterious bracelet",
];

export function SearchBar() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = isDeleting ? 50 : 100;
  const pauseBeforeDelete = 1500;

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex <= currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex > currentPhrase.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      setCharIndex(0);
    }
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <input
      type="text"
      placeholder={`Search for ${text}`}
      className="px-4 py-2 rounded-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black flex flex-grow"
    />
  );
}
