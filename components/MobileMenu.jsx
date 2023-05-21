import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobileView) {
    return null;
  }

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-toggle" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <ul className="dropdown-menu-items">
          <li>
            <a href="https://t.me/JohnnyBravoFanClub" className="dropdown-menu-link hover:text-orange-500 transition-opacity" target="_blank">
              Fan Club
            </a>
          </li>
          <li>
            <ScrollLink to="Tokenomics" smooth={true} duration={500} className="dropdown-menu-link hover:text-blue-300 transition-opacity">
              Tokenomics
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="About" smooth={true} duration={500} className="dropdown-menu-link hover:text-pink-500 transition-opacity">
              About
            </ScrollLink>
          </li>
          <li>
            <a href="https://goerli.etherscan.io/token/0x293482b43e46f9d4a40742bbe7879ec81201fd1c?a=0x4a408BBCe9aaf349bfC7487E3A614020cdfca900#code" target="_blank" className="dropdown-menu-link hover:text-blue-500 transition-opacity">
              Contract
            </a>
          </li>
          <li>
            <a href="https://pancakeswap.finance/swap" target="_blank" className="dropdown-menu-link hover:text-purple-500 transition-opacity">
              Buy
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
