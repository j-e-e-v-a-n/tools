import React, { useState } from 'react';

const PdfToWordConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name.replace('.pdf', '.docx')); // Set default output file name
    }
  };

  const handleConvert = () => {
    if (file) {
      // Conversion logic here
      // For now, just setting the file as the converted one
      setConvertedFile(file);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={handleConvert}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Convert to Word
      </button>

      {convertedFile && (
        <div>
          <p className="mt-2">File Converted: {fileName}</p>
          <a
            href={URL.createObjectURL(convertedFile)}
            download={fileName}
            className="text-blue-600"
          >
            Download Converted File
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfToWordConverter;
