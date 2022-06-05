const sanityClient = require('@sanity/client');

// only fetches Super Smash Bros Amiibos, refer for documentation for other series
const AMIIBO_API_URL = 'https://amiiboapi.com/api/amiibo/?amiiboSeries=0x00';

const client = sanityClient({
  projectId: '',
  dataset: '',
  apiVersion: '',
  token: '',
  useCdn: true,
});

const transform = (externalAPI) => {
  return {
    _id: externalAPI.head + externalAPI.tail,
    _type: 'product',
    name: externalAPI.name,
    character: externalAPI.character,
    amiiboSeries: externalAPI.amiiboSeries,
    gameSeries: externalAPI.gameSeries,
    au: externalAPI.release.au,
    eu: externalAPI.release.eu,
    jp: externalAPI.release.jp,
    na: externalAPI.release.na,
    id: externalAPI.head + externalAPI.tail,
  };
};

//api data fetch
fetch(AMIIBO_API_URL)
  .then((res) => res.json())
  .then((amiibo) => amiibo.amiibo.map(transform))
  .then((amiiboTransform) => {
    let transaction = client.transaction();
    amiiboTransform.forEach((amiiboDocument) => {
      transaction.createOrReplace(amiiboDocument);
    });

    return transaction.commit();
  });

//   .then((amiiboTransform) => console.log(amiiboTransform));
