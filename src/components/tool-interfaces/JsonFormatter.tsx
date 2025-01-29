// components/tool-interfaces/ImageResizer.tsx
import React, { useState } from 'react';

const ImageResizer = () => {
  const [image, setImage] = useState<File | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleResize = () => {
    if (!image) return;

    const img = new Image();
    img.src = URL.createObjectURL(image);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      const resizedImgUrl = canvas.toDataURL();
      setResizedImage(resizedImgUrl);
    };
  };

  return (
    <div>
      <h2>Image Resizer</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
          placeholder="Width"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
          placeholder="Height"
        />
      </div>
      <button onClick={handleResize}>Resize Image</button>
      {resizedImage && (
        <div>
          <h3>Resized Image:</h3>
          <img src={resizedImage} alt="Resized" />
        </div>
      )}
    </div>
  );
};

export default ImageResizer;
