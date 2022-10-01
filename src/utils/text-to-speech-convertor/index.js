import axios from 'axios';
import { createWriteStream } from 'fs';

function textToSpeechConvertor(fileName, textContent, url, username, password, voice) {
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
      Accept: 'audio/wav',
    },
    params: {
      voice,
    },
    data: {
      text: textContent,
    },
  }).then((response) => {
    response.data.pipe(createWriteStream(fileName));
  })
    .catch((err) => {
      throw new Error('Unable to fetch response: ', err);
    });
}

export default textToSpeechConvertor;
