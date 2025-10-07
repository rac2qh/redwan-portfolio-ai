"use client";

import { useEffect, useState } from "react";

const words = ["entrepreneur", "philanthropist", "engineer"];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      const updatedLetterIndex = isDeleting
        ? currentLetterIndex - 1
        : currentLetterIndex + 1;

      setDisplayedText(currentWord.substring(0, updatedLetterIndex));
      setCurrentLetterIndex(updatedLetterIndex);

      if (!isDeleting && updatedLetterIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedLetterIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentLetterIndex, isDeleting, currentWordIndex]);

  return (
    <section className="flex flex-col items-center justify-center text-center h-[calc(100vh-5rem)] px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hello, I'm Redwan — ask me anything.
      </h1>
      <p className="text-xl text-yellow-400">
        <span>{displayedText}</span>
        <span className="border-r-2 border-yellow-400 animate-pulse ml-1" />
      </p>
    </section>
  );
}
