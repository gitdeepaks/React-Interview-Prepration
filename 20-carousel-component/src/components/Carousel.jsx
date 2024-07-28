import React, { useEffect, useRef, useState } from "react";

export default function Carousel({
  images = [],
  isLoading = false,
  imageLimit = images.length - 1,
  imgPerSlide = 1,
  customPrevButton,
  customNextButton,
}) {
  const [currentIndex, setCurrentIndex] = useState(0); // Set initial state to 0
  const [imageWidth, setImageWidth] = useState(0);

  const imageRef = useRef(null);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, [imageRef.current]);

  function goToPrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function goToNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div
      className="carousel"
      style={{
        width: imgPerSlide * imageWidth,
      }}
    >
      <div
        className="image-container"
        style={{
          transform: `translateX(-${currentIndex * imageWidth}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images
          .slice(0, imageLimit > images.length ? images.length : imageLimit)
          .map((image, index) => (
            <img
              onLoad={() => setImageWidth(imageRef.current.offsetWidth)}
              ref={index === 0 ? imageRef : null} // Set ref only on the first image
              key={image.id}
              src={image.url}
              alt={image.title}
              className="image"
            />
          ))}
      </div>

      {customPrevButton instanceof Function ? (
        customPrevButton(goToPrev)
      ) : (
        <button className="btn prev" onClick={goToPrev}>
          {customPrevButton || "Prev"}
        </button>
      )}

      {customNextButton instanceof Function ? (
        customNextButton(goToNext)
      ) : (
        <button className="btn next" onClick={goToNext}>
          {customNextButton || "Next"}
        </button>
      )}
    </div>
  );
}
