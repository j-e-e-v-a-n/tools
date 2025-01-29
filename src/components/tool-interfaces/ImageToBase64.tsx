import React, { useState } from 'react';

const ImageToBase64: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [outputBase64, setOutputBase64] = useState<string>('');

  const imageToBase64 = async () => {
    if (!imageFile) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setOutputBase64(reader.result as string);
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <div>
      <h2>Image to Base64</h2>
      <input type="file" onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)} />
      <button onClick={imageToBase64}>Convert to Base64</button>
      <p>{outputBase64}</p>
    </div>
  );
};

export default ImageToBase64;
