// components/tool-interfaces/PDFMerger.tsx
import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const PDFMerger = () => {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [mergedPdf, setMergedPdf] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFiles([...e.target.files]);
    }
  };

  const handleMerge = async () => {
    const pdfDoc = await PDFDocument.create();
    for (const file of pdfFiles) {
      const fileBytes = await file.arrayBuffer();
      const pdfToMerge = await PDFDocument.load(fileBytes);
      const copiedPages = await pdfDoc.copyPages(pdfToMerge, pdfToMerge.getPages().map((_, index) => index));
      copiedPages.forEach((page) => pdfDoc.addPage(page));
    }
    const mergedPdfBytes = await pdfDoc.save();
    const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);
    setMergedPdf(mergedPdfUrl);
  };

  return (
    <div>
      <h2>PDF Merger</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleMerge}>Merge PDFs</button>
      {mergedPdf && (
        <div>
          <h3>Merged PDF:</h3>
          <a href={mergedPdf} target="_blank" rel="noopener noreferrer">
            View Merged PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PDFMerger;
