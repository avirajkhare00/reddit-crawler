import shell from 'shelljs';

function downloadAudioFromText(apiKey, text, fileName, url, res){
    const jsonData = JSON.stringify({text: text});
    shell.exec(`curl -X POST -u 'apikey:${apiKey}' --header 'Content-Type: application/json' --header 'Accept: audio/wav' --data '${jsonData}' --output public/output/${fileName} '${url}?voice=en-US_MichaelV3Voice'`, {async: true});
    res.json({ fileName });
}

export default downloadAudioFromText;
