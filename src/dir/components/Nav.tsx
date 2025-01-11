import React, { useEffect, useState } from "react";
import { Link,  } from "react-scroll";
const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);
  const [scrolledOffset, setScrolledOffset] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [showMenu, ] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const detectScrollDirection = () => {
    const down = window.scrollY > scrolledOffset;
    setScrollingDown(down);
    setScrolledOffset(window.scrollY);
  };

 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        setScrolledNav(true);
      } else {
        setScrolledNav(false);
      }
      detectScrollDirection();
    });

    if (window.innerWidth <= 980) {
      setSmallScreen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 980) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", detectScrollDirection);
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 980) {
          setSmallScreen(true);
        } else {
          setSmallScreen(false);
        }
      });
    };
  }, []);

  return (
    <div className="w-full    bg-black z-50">
      <nav
        id="nav"
        className={`${
          scrollingDown && !(showMenu && smallScreen) ? "down" : ""
        } ${scrolledNav ? "scrolled" : ""} ${
          smallScreen && showMenu ? "scrolled" : ""
        } flex justify-between items-center px-6 py-4 md:px-12`}
      >
        <div className="text-2xl font-bold">Brytoz</div>
        <nav className="hidden md:flex space-x-6 text-xs">
          {/* <Link
            to="header"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Home
          </Link> */}

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            About
          </Link>

          <Link
            to="language"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Language
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Experience
          </Link>


          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Projects
          </Link>

          <Link
            to="education"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Education
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Contact
          </Link>
         
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
            href="#language"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Language
          </a>
          <a
            href="#experience"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          
          <a
            href="#achievement"
            className="text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Achievements
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
  );
};

export default Nav;
