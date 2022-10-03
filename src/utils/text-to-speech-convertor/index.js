import axios from 'axios';
import { writeFileSync } from 'fs';

function textToSpeechConvertor(fileName, textContent, url, username, password, voice, res) {
  axios({
    url,
    method: 'post',
    responseType: 'blob', // this is important
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
    writeFileSync("public/output/" + fileName, response.data);
    res.json({"fileName": fileName});
  }).catch((err) => {
    throw new Error(`Unable to fetch response: ${err.toString()}`);
  });
}

export default textToSpeechConvertor;
