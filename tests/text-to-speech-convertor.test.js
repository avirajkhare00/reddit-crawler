import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { executablePath } from "puppeteer";
import textToSpeechConvertor from "../src/utils/text-to-speech-convertor";

describe('POST', () => {
    xit('returns data when ibm synthesize api is called', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/123456-abc-1234/v1/synthesize').reply(200, data);

        textToSpeechConvertor(
            "demo.wav",
            "My name is Aviraj Khare.",
            "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/123456-abc-1234/v1/synthesize",
            "apikey",
            "1235abc1234",
            "en-US_MichaelV3Voice"
        )
        const getSpy = jest.spyOn(axios, 'post')
        expect(getSpy).toHaveBeenCalledWith(1, "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/123456-abc-1234/v1/synthesize")
    });
});