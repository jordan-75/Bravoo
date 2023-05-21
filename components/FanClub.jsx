import React, { useRef, useEffect } from "react";

const FanClub = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && audioRef.current) {
      const video = videoRef.current;
      const audio = audioRef.current;

      video.volume = 0;
      audio.volume = 0.2;

      video.addEventListener("loadedmetadata", () => {
        video.play();
        audio.play();
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
        style={{ zIndex: -1 }}
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <audio ref={audioRef} loop>
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>
      <div className="h-3/4 flex flex-col justify-end items-center mt-auto">
        <div className="h-3/4"></div>
        <button className="bg-gradient-to-r from-yellow-400 to-red-400 text-black py-6 px-8 rounded-md font-bold text-lg mb-10 italic hover:text-blue-500 hover:from-red-400 hover:to-yellow-400 transition-all duration-300">
          <span className="flex items-center">
            Join Fan Club
            <img
              src="/telegram.png"
              alt="telegram"
              className="mr-2 w-10 h-8 ml-4"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FanClub;
