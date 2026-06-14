// import "./Hero.css";

// function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//       </div>
//     </section>
//   );
// }

// export default Hero;

import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const images = [
    "/images/hero.jpg",
    "/images/whiteHeels.jpg",
    "/images/blackmules.jpg",
    "/images/whitemule.jpg",
  ];

   const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-slider"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="hero-slide" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;