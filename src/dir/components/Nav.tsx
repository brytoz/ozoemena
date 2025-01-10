import React, { useState } from "react";

const Nav: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 md:px-12">
        <div className="text-2xl font-bold">Brytoz</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#gallery" className="hover:underline">
            Gallery
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-10">
            <button
          className="block md:hidden text-5xl absolute top-2 right-2"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
          <a
            href="#home"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#background"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Background
          </a>
          <a
            href="#gallery"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}

    </div>
  )
}

export default Nav