import { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Bravologo from "../public/Johnny-logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");
    let delay = 0;

    navItems.forEach((item) => {
      item.style.animationDelay = `${delay}s`;
      delay += 0.2;
    });
  }, []);

  return (
    <nav className="mx-auto w-full h-28 bg-yellow-500 shadow-lg border-t-8 border-yellow-400 navbar-border">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" />
      <div className="flex justify-center items-center h-full w-full px-4 2xl:px-16">
        <div className="flex items-center">
          <div className="mr-auto" style={{ marginRight: '40px' }}>
            <Image src={Bravologo} alt="logo" width="100" height="100" priority />
          </div>
        </div>
        <div>
          <ul className="hidden sm:flex">
            <li className="ml-6 hover:text-orange-500 transition-opacity nav-item">
              <a href="https://t.me/JohnnyBravoFanClub" className="flex items-center hover:text-orange-500 transition-opacity" target="_blank">
                <span className="text-xl font-medium italic zoom-effect cursor-pointer">Fan Club</span>
              </a>
            </li>
            <li className="ml-6 hover:text-purple-500 transition-opacity nav-item">
              <ScrollLink
                to="Tokenomics"
                smooth={true}
                duration={500}
                className="flex items-center hover:text-blue-300 transition-opacity"
              >
                <div className="text-xl font-medium italic zoom-effect cursor-pointer">Tokenomics</div>
              </ScrollLink>
            </li>
            <li className="ml-6 hover:text-pink-500 transition-opacity nav-item">
              <ScrollLink
                to="About"
                smooth={true}
                duration={500}
                className="flex items-center hover:text-pink-500 transition-opacity"
              >
                <div className="text-xl font-medium italic zoom-effect cursor-pointer">About</div>
              </ScrollLink>
            </li>
            <li className="ml-6 hover:text-blue-500 transition-opacity nav-item">
              <a href="https://bscscan.com/address/0x293482b43e46f9d4a40742bbe7879ec81201fd1c" target="_blank">
                <div className="text-xl font-medium italic zoom-effect cursor-pointer">Contract</div>
              </a>
            </li>
            {/* <li className="ml-6 nav-item">
              <a href="https://app.uniswap.org/#/swap?outputCurrency=0x293482B43e46f9D4a40742Bbe7879Ec81201FD1C" target="_blank" className="flex items-center hover:text-cyan-500 transition-opacity">
                <span className="text-xl font-medium italic zoom-effect cursor-pointer">Chart</span>
              </a>
            </li> */}
            <li className="ml-6 nav-item">
              <a href="https://gempad.app/presale/0xaddb7759ceEc23E097BA9fE360D9380B3DCc701f?chainId=56" target="_blank" className="flex items-center hover:text-purple-500 transition-opacity">
                 <span className="text-xl font-medium italic zoom-effect cursor-default">Buy</span>
              </a>
              </li>
          </ul>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
