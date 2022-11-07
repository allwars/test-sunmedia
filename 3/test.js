const NETWORK_ERROR_PROBABILITY = 0.1;

function fakeFetch(ad, cb) {
  const fakeResponses = [
    { ad: 1, title: 'The first ad' },
    { ad: 2, title: 'The second ad' },
    { ad: 3, title: 'The third ad' },
    { ad: 4, title: 'The forth ad' },
    { ad: 5, title: 'The last ad' },
  ];
  const randomDelay = (Math.round(Math.random() * 1E4) % 40) + 1000;
  function cb(networkError, currentAd) {
    if (networkError == 'Network error') {
      console.log("Failed to load the ad " + currentAd.ad);
    } else {
      console.log(currentAd);
      if ((currentAd.ad +1) == ArrayReponse ) {
        console.log("Done!");

      }
    }
  }
  ArrayReponse = fakeResponses.length += 1
  setTimeout(() => {
    for (let ad = 0; ad < ArrayReponse; ad++) {
      if (ad == 0) {
        ad += 1;
        const networkError = Math.random() <= NETWORK_ERROR_PROBABILITY;
        //const networkError = true;
        const currentAd = fakeResponses.find(resp => resp.ad === ad);
        if (networkError) {
          cb('Network error', currentAd);
          return networkError
        } else {
          cb(null, currentAd);
        }
      } else if (ad > 0 && ad < ArrayReponse) {
        const networkError = Math.random() <= NETWORK_ERROR_PROBABILITY;
        const currentAd = fakeResponses.find(resp => resp.ad === ad);
        
        if (networkError) {
          cb('Network error', currentAd);
          return networkError
        } else {
          cb(null, currentAd);

        }
      } else if (ad == ArrayReponse) {
        console.log("Done!");
      }

    }
  }, randomDelay);
} fakeFetch();