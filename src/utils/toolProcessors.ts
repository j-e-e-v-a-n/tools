// Tool Processing Functions

// Text Case Converter
export const convertCase = (text: string, type: 'upper' | 'lower' | 'title' | 'sentence'): string => {
  switch (type) {
    case 'upper':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    case 'title':
      return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    case 'sentence':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
};

// Password Generator
export const generatePassword = (
  length: number,
  options: { uppercase: boolean; lowercase: boolean; numbers: boolean; symbols: boolean }
): string => {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = '';
  if (options.uppercase) chars += uppercaseChars;
  if (options.lowercase) chars += lowercaseChars;
  if (options.numbers) chars += numberChars;
  if (options.symbols) chars += symbolChars;

  if (!chars) return '';

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

// Base64 Encoder/Decoder
export const base64Process = {
  encode: (text: string): string => {
    return btoa(text);
  },
  decode: (text: string): string => {
    try {
      return atob(text);
    } catch {
      throw new Error('Invalid Base64 string');
    }
  }
};

// URL Encoder/Decoder
export const urlProcess = {
  encode: (text: string): string => {
    return encodeURIComponent(text);
  },
  decode: (text: string): string => {
    return decodeURIComponent(text);
  }
};

// Text Analyzer
export const analyzeText = (text: string) => {
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
  const characters = text.length;
  const uniqueWords = new Set(words.map(word => word.toLowerCase())).size;

  return {
    characters,
    words: words.length,
    sentences: sentences.length,
    uniqueWords,
    averageWordLength: characters / words.length || 0
  };
};

// Password Strength Analyzer
export const analyzePassword = (password: string) => {
  const strength = {
    score: 0,
    hasLower: /[a-z]/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password),
    isLongEnough: password.length >= 8
  };

  if (strength.hasLower) strength.score += 1;
  if (strength.hasUpper) strength.score += 1;
  if (strength.hasNumber) strength.score += 1;
  if (strength.hasSpecial) strength.score += 1;
  if (strength.isLongEnough) strength.score += 1;

  return {
    ...strength,
    rating: ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][strength.score - 1] || 'Very Weak'
  };
};