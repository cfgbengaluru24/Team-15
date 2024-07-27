import React, { useState, useEffect } from 'react';

const slideImages = [
  {
    url: 'https://media.licdn.com/dms/image/C511BAQFdLr0crPxW_w/company-background_10000/0/1585339137249/the_cadet_program_cover?e=2147483647&v=beta&t=g_5aNn34UbIq2kxsQhEcRj1KMwl9UWJIh26Ct10kaTA',
    caption: 'Transforming Youth, Shaping Futures'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczNo4T6gegP55r9D9YXGotQ7_VXfHWKVp1tBjfAQVbW2lIS-eBKRX5S_0QA4j-_CsRAxxeWp5hMFXRg7-W1NPQUfAhJi7aFSSoOig1l4A-c-AIGYMSnbUAVxnXWEWKJhhcztCFcHNL7PaJD9R_QKtcqC=w1125-h633-s-no-gm?authuser=0',
    caption: 'Empowering the Leaders of Tomorrow'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczNbv8FUkw6EY5oJjC0Uc4PSbc7oOsjnsX92Htp7pooF02h-U0bQALB13UhYU1EUxm74wI2VYvannzWc5Gb7xFRe3msVTNbdIG6Z7jDMbqhi2OvgCw2bnJC2gdOJMlg-KH2EWPEYetCCPEvtf1x30WPF=w1125-h633-s-no-gm?authuser=0',
    caption: 'Better Jobs Quicker'
  }
];

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slideImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl md:text-4xl font-bold p-4 shadow-lg">
              {slide.caption}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
