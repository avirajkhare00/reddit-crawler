import dotenv from 'dotenv';

import pageCrawler from './utils/page-crawler/index.js';
import sanitizedText from './utils/text-sanitization/index.js';
import textToSpeechConvertor from './utils/text-to-speech-convertor/index.js';

dotenv.config()(async () => {
  const url = process.argv[2];
  const text = await pageCrawler(url);
  const cleanedText = sanitizedText(text).slice(0, 500);
  textToSpeechConvertor(
    'demo.wav',
    cleanedText,
    process.env.IBM_URL,
    'apikey',
    process.env.API_KEY,
    'en-US_MichaelV3Voice',
  );
})();
