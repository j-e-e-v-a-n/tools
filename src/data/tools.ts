import { Tool, Category } from '../types/tool';

export const categories: Category[] = [
  {
    id: 'pdf',
    name: 'PDF Tools',
    description: 'Convert, compress, and manipulate PDF files'
  },
  {
    id: 'image',
    name: 'Image Tools',
    description: 'Edit, convert, and optimize images'
  },
  {
    id: 'text',
    name: 'Text Tools',
    description: 'Text manipulation and conversion tools'
  },
  {
    id: 'dev',
    name: 'Developer Tools',
    description: 'Tools for developers and programmers'
  },
  {
    id: 'converter',
    name: 'Converters',
    description: 'Convert between different formats and units'
  },
  {
    id: 'generator',
    name: 'Generators',
    description: 'Generate various types of content and data'
  },
  {
    id: 'encoder',
    name: 'Encoders & Decoders',
    description: 'Encode and decode various data formats'
  },
  {
    id: 'formatter',
    name: 'Formatters',
    description: 'Format and beautify different types of content'
  },
  {
    id: 'calculator',
    name: 'Calculators',
    description: 'Various calculation and computation tools'
  },
  {
    id: 'analyzer',
    name: 'Analyzers',
    description: 'Analyze and extract information from data'
  }
];

export const tools: Tool[] = [
  // PDF Tools
    {
      id: 'pdf-to-word',
      name: 'PDF to Word',
      description: 'Convert PDF files to editable Word documents',
      category: 'pdf',
      icon: 'FileType'
    },
    {
      id: 'pdf-compress',
      name: 'PDF Compressor',
      description: 'Reduce PDF file size while maintaining quality',
      category: 'pdf',
      icon: 'FileDown'
    },
    {
      id: 'pdf-merge',
      name: 'PDF Merger',
      description: 'Combine multiple PDF files into one document',
      category: 'pdf',
      icon: 'FileMerge'
    },
    {
      id: 'pdf-split',
      name: 'PDF Splitter',
      description: 'Split PDF files into multiple documents',
      category: 'pdf',
      icon: 'FileSplit'
    },
    {
      id: 'image-resizer',
      name: 'Image Resizer',
      description: 'Resize images while maintaining quality',
      category: 'image',
      icon: 'Image'
    },
    {
      id: 'image-converter',
      name: 'Image Converter',
      description: 'Convert images between different formats',
      category: 'image',
      icon: 'ImagePlus'
    },
    {
      id: 'image-compressor',
      name: 'Image Compressor',
      description: 'Compress images without losing quality',
      category: 'image',
      icon: 'ImageDown'
    },
    {
      id: 'image-to-base64',
      name: 'Image to Base64',
      description: 'Convert images to base64 encoded strings',
      category: 'image',
      icon: 'Binary'
    },
    {
      id: 'text-case-converter',
      name: 'Case Converter',
      description: 'Convert text between different cases',
      category: 'text',
      icon: 'Type'
    },
    {
      id: 'markdown-to-html',
      name: 'Markdown to HTML',
      description: 'Convert Markdown to HTML',
      category: 'text',
      icon: 'FileCode'
    },
    {
      id: 'text-diff',
      name: 'Text Diff',
      description: 'Compare two texts and find differences',
      category: 'text',
      icon: 'GitCompare'
    },
    {
      id: 'text-counter',
      name: 'Text Counter',
      description: 'Count characters, words, and lines',
      category: 'text',
      icon: 'ListChecks'
    },
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      description: 'Format and validate JSON data',
      category: 'dev',
      icon: 'Braces'
    },
    {
      id: 'color-picker',
      name: 'Color Picker',
      description: 'Pick and convert colors between formats',
      category: 'dev',
      icon: 'Palette'
    },
    {
      id: 'regex-tester',
      name: 'Regex Tester',
      description: 'Test and debug regular expressions',
      category: 'dev',
      icon: 'FileSearch'
    },
    {
      id: 'jwt-decoder',
      name: 'JWT Decoder',
      description: 'Decode and verify JWT tokens',
      category: 'dev',
      icon: 'Key'
    },
    {
      id: 'unit-converter',
      name: 'Unit Converter',
      description: 'Convert between different units of measurement',
      category: 'converter',
      icon: 'ArrowLeftRight'
    },
    {
      id: 'number-base',
      name: 'Number Base Converter',
      description: 'Convert numbers between different bases',
      category: 'converter',
      icon: 'Binary'
    },
    {
      id: 'time-converter',
      name: 'Time Zone Converter',
      description: 'Convert times between different time zones',
      category: 'converter',
      icon: 'Clock'
    },
    {
      id: 'currency-converter',
      name: 'Currency Converter',
      description: 'Convert between different currencies',
      category: 'converter',
      icon: 'Currency'
    },
    {
      id: 'password-generator',
      name: 'Password Generator',
      description: 'Generate secure random passwords',
      category: 'generator',
      icon: 'KeyRound'
    },
    {
      id: 'uuid-generator',
      name: 'UUID Generator',
      description: 'Generate random UUIDs/GUIDs',
      category: 'generator',
      icon: 'Hash'
    },
    {
      id: 'lorem-ipsum',
      name: 'Lorem Ipsum Generator',
      description: 'Generate Lorem Ipsum placeholder text',
      category: 'generator',
      icon: 'TextQuote'
    },
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      description: 'Generate QR codes from text or URLs',
      category: 'generator',
      icon: 'QrCode'
    },
    {
      id: 'base64-encoder',
      name: 'Base64 Encoder',
      description: 'Encode and decode Base64 strings',
      category: 'encoder',
      icon: 'Binary'
    },
    {
      id: 'url-encoder',
      name: 'URL Encoder',
      description: 'Encode and decode URLs',
      category: 'encoder',
      icon: 'Link'
    },
    {
      id: 'html-encoder',
      name: 'HTML Encoder',
      description: 'Encode and decode HTML entities',
      category: 'encoder',
      icon: 'Code'
    },
    {
      id: 'sql-formatter',
      name: 'SQL Formatter',
      description: 'Format and beautify SQL queries',
      category: 'formatter',
      icon: 'Database'
    },
    {
      id: 'xml-formatter',
      name: 'XML Formatter',
      description: 'Format and beautify XML documents',
      category: 'formatter',
      icon: 'FileCode'
    },
    {
      id: 'css-formatter',
      name: 'CSS Formatter',
      description: 'Format and beautify CSS code',
      category: 'formatter',
      icon: 'Paintbrush'
    },
    {
      id: 'scientific-calculator',
      name: 'Scientific Calculator',
      description: 'Advanced scientific calculations',
      category: 'calculator',
      icon: 'Calculator'
    },
    {
      id: 'percentage-calculator',
      name: 'Percentage Calculator',
      description: 'Calculate percentages and ratios',
      category: 'calculator',
      icon: 'Percent'
    },
    {
      id: 'date-calculator',
      name: 'Date Calculator',
      description: 'Calculate dates and time differences',
      category: 'calculator',
      icon: 'Calendar'
    },
    {
      id: 'seo-analyzer',
      name: 'SEO Analyzer',
      description: 'Analyze text for SEO optimization',
      category: 'analyzer',
      icon: 'Search'
    }
];