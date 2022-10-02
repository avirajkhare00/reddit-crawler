import axios from 'axios';
import { createWriteStream } from 'fs';

function textToSpeechConvertor(fileName, textContent, url, username, password, voice, res) {
  axios({
    url,
    method: 'post',
    responseType: 'stream',
    auth: {
      username,
      password,
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'audio/wav',
    },
    params: {
      voice,
    },
    data: {
      text: textContent,
    },
  }).then((response) => {
    response.data.pipe(createWriteStream(fileName));
    res.writeHead(200, {
      'Content-Type': 'mimetype',
      'Content-disposition': `attachment;filename=${fileName}`,
      'Content-Length': response.length
    });
    res.end(Buffer.from(response, 'binary'));
  }).catch((err) => {
    throw new Error(`Unable to fetch response: ${err.toString()}`);
  });
}

export default textToSpeechConvertor;
