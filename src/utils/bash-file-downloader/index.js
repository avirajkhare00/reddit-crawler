import shell from 'shelljs';

async function downloadAudioFromText(apiKey, text, fileName, url, res) {
  const jsonData = JSON.stringify({ text });
  const child = shell.exec(`curl -X POST -u 'apikey:${apiKey}' --header 'Content-Type: application/json' --header 'Accept: audio/wav' --data '${jsonData}' --output public/output/${fileName} '${url}?voice=en-US_MichaelV3Voice'`, { async: true });
  child.stdout.on('data', async (data) => {
    console.log(data);
    await res.json({ fileName });
  });
}

export default downloadAudioFromText;
