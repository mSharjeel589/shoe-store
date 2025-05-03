import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed w-full left-[50%] -translate-x-[50%] section-container">
      <a href="#">
        <img className="w-24 md:w-32" src="./src/assets/siteLogo.png" alt="" />
      </a>
      <nav className="hidden md:block space-x-6 lg:space-x-8 text-white font-bold lg:text-2xl">
        <a href="#">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <button className="text-white text-5xl md:hidden">
      ☰
      </button>
    </header>
  );
}
