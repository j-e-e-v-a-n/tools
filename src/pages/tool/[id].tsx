import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tools } from '../../data/tools'; // Make sure this path is correct
import { ArrowLeft } from 'lucide-react';

import PDFToWord from '../../components/tool-interfaces/PdfToWordConverter';
import PDFCompressor from '../../components/tool-interfaces/PdfCompressor';
import PDFMerger from '../../components/tool-interfaces/PdfMerger';  // Ensure this file exists
import PDFSplitter from '../../components/tool-interfaces/PdfSplit';
import ImageResizer from '../../components/tool-interfaces/ImageResizer';
import ImageConverter from '../../components/tool-interfaces/ImageConverter';
import ImageCompressor from '../../components/tool-interfaces/ImageCompressor';
import ImageToBase64 from '../../components/tool-interfaces/ImageToBase64';
import TextCaseConverter from '../../components/tool-interfaces/TextCaseConverter';
import MarkdownToHtml from '../../components/tool-interfaces/MarkdownToHtml';
import TextDiff from '../../components/tool-interfaces/TextDiff';
import TextCounter from '../../components/tool-interfaces/TextCounter';
import JsonFormatter from '../../components/tool-interfaces/JsonFormatter';
import ColorPicker from '../../components/tool-interfaces/ColorPicker';
import RegexTester from '../../components/tool-interfaces/RegexTester';
import UnitConverter from '../../components/tool-interfaces/UnitConverter';
import CurrencyConverter from '../../components/tool-interfaces/CurrencyConverter';
import PasswordGenerator from '../../components/tool-interfaces/PasswordGenerator';
import UUIDGenerator from '../../components/tool-interfaces/UuidGenerator';
import Base64Encoder from '../../components/tool-interfaces/Base64EncoderDecoder';
import PasswordStrengthAnalyzer from '../../components/tool-interfaces/PasswordStrengthChecker';

const ToolPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tool = tools.find((t) => t.id === id);

  const renderToolInterface = () => {
    if (!tool) {
      return (
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-500 text-center">Tool interface coming soon...</p>
        </div>
      );
    }

    const toolMap: { [key: string]: JSX.Element } = {
      'pdf-to-word': <PDFToWord />,
      'pdf-compress': <PDFCompressor />,
      'pdf-merge': <PDFMerger />,
      'pdf-split': <PDFSplitter />,
      'image-resizer': <ImageResizer />,
      'image-converter': <ImageConverter />,
      'image-compressor': <ImageCompressor />,
      'image-to-base64': <ImageToBase64 />,
      'text-case-converter': <TextCaseConverter />,
      'markdown-to-html': <MarkdownToHtml />,
      'text-diff': <TextDiff />,
      'text-counter': <TextCounter />,
      'json-formatter': <JsonFormatter />,
      'color-picker': <ColorPicker />,
      'regex-tester': <RegexTester />,
      'unit-converter': <UnitConverter />,
      'currency-converter': <CurrencyConverter />,
      'password-generator': <PasswordGenerator />,
      'uuid-generator': <UUIDGenerator />,
      'base64-encoder': <Base64Encoder />,
      'password-analyzer': <PasswordStrengthAnalyzer />,
    };

    return toolMap[id] || (
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-gray-500 text-center">Tool interface coming soon...</p>
      </div>
    );
  };

  if (!tool) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Tool Not Found</h1>
            <p className="mt-4 text-gray-500">The requested tool could not be found.</p>
            <button
              onClick={() => navigate('/tools')}
              className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Tools
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/tools')}
          className="mb-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tools
        </button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
          </div>
          <p className="text-gray-600 mb-8">{tool.description}</p>

          {renderToolInterface()}
        </div>
      </div>
    </div>
  );
};

export default ToolPage;
