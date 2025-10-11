"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";

const words = ["engineer", "content creator", "philanthropist", "reader", "investor"];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

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
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 pt-20">
      {/* Top-right controls */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <Link
          href="https://github.com/rac2qh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition"
        >
          <FaGithub size={24} />
        </Link>
        <button
          onClick={toggleTheme}
          className="text-white hover:text-blue-400 transition"
          aria-label="Toggle dark/light mode"
        >
          {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </div>

      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hello, I'm Redwan — ask me anything.
      </h1>

      {/* Typewriter */}
      <p className="text-xl text-blue-400">
        <span>{displayedText}</span>
        <span className="border-r-2 border-blue-400 animate-pulse ml-1" />
      </p>

      {/* Nav Buttons */}
      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        <NavButton href="/experience" emoji="💼" label="Experience" />
        <NavButton href="/projects" emoji="🚀" label="Projects" />
        <NavButton href="/certs&skills" emoji="⚡" label="Certs & Skills" />
        <NavButton href="/contact" emoji="📇" label="Contact" />
        <NavButton href="/more" emoji="➕" label="More" />
      </div>
    </section>
  );
}

// NavButton component
function NavButton({ href, emoji, label }: { href: string; emoji: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 bg-gray-900/30 text-white hover:border-blue-400 hover:shadow-md transition backdrop-blur-sm"
    >
      <span className="text-xl">{emoji}</span>
      <span>{label}</span>
    </Link>
  );
}
