import { useState, useEffect } from 'react';

const Footer = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDisplayTime, setLastDisplayTime] = useState(0);

  useEffect(() => {
    const words = ["PUMP", "IT","🚀"];
    let lastX = -Infinity;
    let lastY = -Infinity;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const deltaX = Math.abs(clientX - lastX);
      const deltaY = Math.abs(clientY - lastY);
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastDisplayTime;

      if ((deltaX >= 100 || deltaY >= 100) && elapsedTime >= 100) {
        const trail = document.createElement('span');
        trail.className = 'text-black-500';
        trail.style.position = 'fixed';
        trail.style.left = `${clientX - 20}px`;
        trail.style.top = `${clientY + 20}px`;
        trail.innerText = words[currentIndex];
        document.body.appendChild(trail);

        setTimeout(() => {
          trail.remove();
        }, 1000);

        lastX = clientX;
        lastY = clientY;
        setLastDisplayTime(currentTime);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    
    const footer = document.querySelector('footer');
    footer.addEventListener('mousemove', handleMouseMove);

    return () => {
      footer.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentIndex, lastDisplayTime]);

  return (
    <footer className="relative" >
      <p>{text}</p>
      <div className="bg-absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 py-8 shadow-lg relative">
        <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <img src="/pumpit.png" alt="Johnny Bravo" className="w-48 h-48 mb-4" />
          <div className="flex items-center justify-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter-logo.png" alt="Twitter" className="w-12 h-12 rounded-full" />
            </a>
            <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
              <img src="/pancake.png" alt="Uniswap" className="w-12 h-12 rounded-full"  style={{width: "35px", height: "35px"}}/>
            </a>
            <a href="https://t.me/JohnnyBravoFanClub" target="_blank" rel="noopener noreferrer">
              <img src="/telegram.png" alt="Telegram" className="w-12 h-12 rounded-full" />
            </a>
            <a href="https://bscscan.com/" target="_blank" rel="noopener noreferrer">
              <img src="/bsc.png" alt="etherscan" className="w-12 h-12 rounded-full"  style={{width: "35px", height: "35px"}} />
            </a>
          </div>
          <p className="text-black mt-4 text-lg">Team@JohnnyBravo.com</p>
          <p className="text-black mt-4 text-2xl">© Flex By Day, Trade $BRAVO By Night!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
