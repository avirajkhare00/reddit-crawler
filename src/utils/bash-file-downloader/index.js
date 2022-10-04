import shell from 'shelljs';

async function downloadAudioFromText(apiKey, text, fileName, url, res) {
  const jsonData = JSON.stringify({ text });
  shell.exec(`curl -X POST -u 'apikey:${apiKey}' --header 'Content-Type: application/json' --header 'Accept: audio/wav' --data '${jsonData}' --output public/output/${fileName} '${url}?voice=en-US_MichaelV3Voice'`);
  res.json({ fileName });
}

export default downloadAudioFromText;
