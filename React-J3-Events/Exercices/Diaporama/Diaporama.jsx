import React, { useState, useEffect } from "react";

const images = [
  "cerisier.jpg",
  "dattier.jpg",
  "noyer.jpg",
  "pecher.jpg",
  "poirier.jpg",
  "prunier.jpg",
];

const Diapo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const randomImage = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextImage, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="diapo-container" style={{ textAlign: "center" }}>
      <h1>Diaporama</h1>
      <div>
        <button onClick={prevImage}>Précédente</button>
        <button onClick={randomImage} style={{ margin: "0 10px" }}>
          Aléatoire
        </button>
      </div>
      <img
        src={`/img/${images[currentIndex]}`}
        alt={`Image ${currentIndex + 1}`}
        style={{
          width: "100%",
          maxWidth: "400px",
          maxHeight: "400px",
          objectFit: "fill",
          marginTop: "20px",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
      <button onClick={nextImage}>Suivante</button>
    </div>
  );
};

export default Diapo;
