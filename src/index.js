import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import pageCrawler from './utils/page-crawler/index.js';
import textToSpeechConvertor from './utils/text-to-speech-convertor/index.js';

dotenv.config({ path: './.env' });

const app = express();
const port = 8080;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ response: 'pong' });
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/html/index.html'));
});

app.post('/crawl_text', async (req, res) => {
  res.json({ data: await pageCrawler(req.body.url) });
});

app.post('/convert_audio', async (req, res) => {
  const fileName = Date.now();
  await textToSpeechConvertor(
    `${fileName.toString()}.wav`,
    req.body.text,
    process.env.IBM_URL,
    'apikey',
    process.env.API_KEY,
    'en-US_MichaelV3Voice',
    res,
  );
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
