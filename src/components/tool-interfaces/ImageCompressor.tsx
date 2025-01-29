import React, { useState } from 'react';

const ImageCompressor: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files ? event.target.files[0] : null);
  };

  const handleCompress = () => {
    if (image) {
      // Compression logic here (For simplicity, just returning the same file)
      setCompressedImage(image);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={handleCompress}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Compress Image
      </button>

      {compressedImage && (
        <div>
          <p className="mt-2">Compressed Image: {compressedImage.name}</p>
          <a
            href={URL.createObjectURL(compressedImage)}
            download={compressedImage.name}
            className="text-blue-600"
          >
            Download Compressed Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
