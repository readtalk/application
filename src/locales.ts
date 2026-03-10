// src/locales.ts
export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'id', name: 'Bahasa Indonesia', nativeName: 'Bahasa Indonesia' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip' },
  { code: 'am', name: 'Amharic', nativeName: 'አግርኛ' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan dili' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
  { code: 'ca', name: 'Catalan', nativeName: 'Català' },
  { code: 'zh', name: 'Simplified Chinese', nativeName: '简体中文' },
  { code: 'zh-hk', name: 'Traditional Chinese (Hong Kong)', nativeName: '繁體中文（香港）' },
  { code: 'zh-tw', name: 'Traditional Chinese (Taiwan)', nativeName: '繁體中文（台灣）' },
];

export type Language = typeof languages[0];
