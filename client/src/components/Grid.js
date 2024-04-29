import React from 'react';
import './styles/Grid.css'; // Import your CSS file for styling

const images = [
  { src: '../images/photo1.jpg', width: 182, height: 300 },
  { src: '../images/photo2.jpg', width: 182, height: 450 },
  { src: '../images/photo3.jpg', width: 200, height: 300 },
  { src: '../images/photo4.jpg', width: 182, height: 450 },
  { src: '../images/photo5.jpg', width: 182, height: 300 },
  { src: '../images/photo6.jpg', width: 200, height: 450 },

  { src: '../images/photo7.jpg', width: 180, height: 300 },
  { src: '../images/photo8.jpg', width: 180, height: 450 },
  { src: '../images/photo9.jpg', width: 200, height: 300 },
  { src: '../images/photo10.jpg', width: 180, height: 450 },
  { src: '../images/photo1.jpg', width: 180, height: 300 },
  { src: '../images/photo2.jpg', width: 200, height: 450 },
  // Add more images with their respective dimensions
];

const Gallery = () => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="grid-item"
          style={{
            gridColumnEnd: `span ${Math.ceil(image.width / 100)}`,
            gridRowEnd: `span ${Math.ceil(image.height / 100)}`
          }}
        >
          <img src={image.src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
