# Reddit Crawler

Basic reddit crawler using puppetter.

# Basic curl request

```
 curl -X POST -u "apikey:{api_key}" \
--header "Content-Type: application/json" \
--header "Accept: audio/wav" \
--data "{\"text\":\"My name is Aviraj Khare and I am from India.\"}" \
--output hello_world.wav \
"{url}/v1/synthesize?voice=en-US_MichaelV3Voice"
```

# TODO
 - ~~Mock the API call. I am crying :(~~
 - It's working now. I am happy.