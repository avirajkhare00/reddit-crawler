import axios from 'axios';
import { createWriteStream } from 'fs';

function textToSpeechConvertor(fileName, textContent, url, username, password, voice){
    const response = axios({
        url: url,
        method: 'post',
        responseType: 'stream',
        auth: {
            username: username,
            password: password
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "audio/wav"
        },
        params: {
            "voice": voice
        },
        data: {
            "text": textContent
        }
    }).then(function (response) {
        response.data.pipe(createWriteStream(fileName));
      })
      .catch(function (err) {
        console.error(err);
      });
};

export default textToSpeechConvertor;
