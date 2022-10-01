import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { executablePath } from "puppeteer";
import textToSpeechConvertor from "../src/utils/text-to-speech-convertor";

describe('POST', () => {
    // increasing timeout due to issue
    // beforeEach(() => {
    //     jest.setTimeout(600000);
    // });
    it('returns data when ibm synthesize api is called', done => {
        // This sets the mock adapter on the default instance
        var mock = new MockAdapter(axios);
        // Mock any POST request to /v1/synthesize/
        // arguments for reply are (status)
        mock.onPost("/v1/synthesize/").reply(200);
        axios({
            url: '/v1/synthesize/',
            method: 'post'
        })
        .then(function(data){
            expect(data.status).toBe(200);
        });
        done();
    });
});
