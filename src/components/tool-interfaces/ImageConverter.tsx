import React, { useState } from 'react';

const ImageConverter: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [convertedImage, setConvertedImage] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [format, setFormat] = useState('jpeg');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files ? event.target.files[0] : null);
    if (event.target.files) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleConvert = () => {
    if (image) {
      // Conversion logic here (for simplicity, just returning the same file)
      setConvertedImage(image);
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
        <label className="block text-sm font-medium text-gray-700">Convert to Format</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="gif">GIF</option>
        </select>
      </div>

      <button
        onClick={handleConvert}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Convert Image
      </button>

      {convertedImage && (
        <div>
          <p className="mt-2">Converted Image: {fileName.replace(/\.[^/.]+$/, `.${format}`)}</p>
          <a
            href={URL.createObjectURL(convertedImage)}
            download={fileName.replace(/\.[^/.]+$/, `.${format}`)}
            className="text-blue-600"
          >
            Download Converted Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
