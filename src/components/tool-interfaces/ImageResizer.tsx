import React, { useState } from 'react';

const ImageResizer: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [resizedImage, setResizedImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files ? event.target.files[0] : null);
  };

  const handleResize = () => {
    if (image) {
      // Image resizing logic here
      // For now, just setting the file as the resized one
      setResizedImage(image);
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

      <div>
        <label className="block text-sm font-medium text-gray-700">Width</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Height</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={handleResize}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Resize Image
      </button>

      {resizedImage && (
        <div>
          <p className="mt-2">Resized Image: {resizedImage.name}</p>
          <a
            href={URL.createObjectURL(resizedImage)}
            download={resizedImage.name}
            className="text-blue-600"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageResizer;
