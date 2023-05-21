import React from 'react';

const About = () => {
  return (
    <section id="About" className="bg-gradient-to-b from-transparent to-black">
      <div
        className="relative h-screen flex justify-end items-center"
        style={{
          background: `url('/jbwp2.jpg') no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute left-0 bottom-0">
          <img
            src="/dance2.gif"
            alt="Dancing GIF"
            style={{ width: "100%", maxWidth: "80%", height: "auto" }}
          />
        </div>
        <div className="max-w-lg bg-white bg-opacity-80 p-8 mx-4 md:mx-8 lg:mx-60 shadow-lg">
          <p className="text-black font-luckiest-guy mb-4">
            If you&lsquo;ve been wondering what the logical connection is between crypto and Johnny Bravo, let me enlighten you. Investing in Johnny Bravo Token is as cool as the man himself, minus the fur rug. With his impressive muscles and endless charisma, Johnny Bravo is the unexpected hero of crypto.
          </p>
          <p className="text-black font-luckiest-guy mb-4">
            Now, picture this: you invest in Johnny Bravo Token, and your wallet grows faster than his hairdo. The gains skyrocket quicker than his biceps after a workout. You see, Johnny Bravo is not just an icon of self-confidence, but also a symbol of exponential growth.
          </p>
          <p className="text-black font-luckiest-guy mb-4">
            And that&lsquo;s not all! With the Johnny Bravo Token, you get a laid-back vibe with no rug pulls. Positive vibes are guaranteed, just like those perfectly sculpted biceps. It&lsquo;s like listening to his favorite playlist while your investment hits the jackpot.
          </p>
          <p className="text-black font-luckiest-guy">
            Ultimately, investing in the Johnny Bravo Token is more than just a financial choice. It&lsquo;s a bold statement that propels you into a world of muscles, confidence, and gains. So get ready to conquer the crypto world with Johnny Bravo and his incredibly cool vibes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
