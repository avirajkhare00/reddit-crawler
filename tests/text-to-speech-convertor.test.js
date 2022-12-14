import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('POST', () => {
  it('returns data when ibm synthesize api is called', (done) => {
    // This sets the mock adapter on the default instance
    const mock = new MockAdapter(axios);
    // Mock any POST request to /v1/synthesize/
    // arguments for reply are (status)
    mock.onPost('/v1/synthesize/').reply(200);
    axios({
      url: '/v1/synthesize/',
      method: 'post',
    })
      .then((data) => {
        expect(data.status).toBe(200);
      });
    done();
  });

  it('receives correct headers when the api is called', (done) => {
    const mock = new MockAdapter(axios);
    mock.onPost('/v1/synthesize/').reply(200);
    axios({
      url: '/v1/synthesize/',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'audio/wav',
      },
    })
      .then((response) => {
        expect(response.config.headers).toStrictEqual({ Accept: 'audio/wav', 'Content-Type': 'application/json' });
      });
    done();
  });
});
