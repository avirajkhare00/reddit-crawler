import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import pageCrawler from './utils/page-crawler/index.js';
import downloadAudioFromText from './utils/bash-file-downloader/index.js'

dotenv.config({ path: './.env' });

const app = express();
const port = 8080;

const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, 'public')));
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
  downloadAudioFromText(
    process.env.API_KEY,
    req.body.text.replace('"', ''),
    `${fileName.toString()}.wav`,
    process.env.IBM_URL,
    res
  );
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
