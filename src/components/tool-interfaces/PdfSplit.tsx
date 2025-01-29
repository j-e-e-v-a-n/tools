import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const PdfSplit: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [outputText, setOutputText] = useState<string>('');

  const splitPdf = async () => {
    if (!pdfFile) return;
    const existingPdfBytes = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const numPages = pdfDoc.getPageCount();
    const splitFiles = [];

    for (let i = 0; i < numPages; i++) {
      const newPdf = await PDFDocument.create();
      const [page] = await newPdf.copyPages(pdfDoc, [i]);
      newPdf.addPage(page);
      const pdfBytes = await newPdf.save();
      splitFiles.push(pdfBytes);
    }
    setOutputText(`Split PDF into ${splitFiles.length} files.`);
  };

  return (
    <div>
      <h2>PDF Split</h2>
      <input type="file" onChange={(e) => setPdfFile(e.target.files ? e.target.files[0] : null)} />
      <button onClick={splitPdf}>Split PDF</button>
      <p>{outputText}</p>
    </div>
  );
};

export default PdfSplit;
