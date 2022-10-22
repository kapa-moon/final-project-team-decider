

export const APIKey = '5b82ca360a754cec8eb085096ff20a32';

async function fetchNearbyPlaces() {
    const latitude = -73.9969622;
    const longitude = 40.7264075;
    let radius = 4 * 1000;
    var places = [];

    var categories = 'catering';
    //const url = 'https://api.geoapify.com/v2/places?categories=' + categories + '&filter=circle:' + latitude + ',' + longitude + ',' + radius + '&limit=20&apiKey=' + APIKey
    const url = 'https://api.geoapify.com/v2/places?categories='+categories+'&filter=circle:' +latitude+ ','+longitude+','+radius+'&bias=proximity:-73.99120964730558,40.7362796&limit=20&apiKey=' + APIKey;

    var requestOptions = {
        method: 'GET',
      };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => { 
        for (let geoPlace of result.features) {
            var place = {};
            var myLat = geoPlace.properties.lon;
            var myLong = geoPlace.properties.lat;
            var coordinate = {
                latitude: myLat,
                longitude: myLong,
            };
            place['coordinate'] = coordinate;
            place['placeName'] = geoPlace.properties.name;
            places.push(place);
        }
        console.log(places);
        console.log('The places around San Francisco, CA, USA: ' + places.map(nearbyPlaces => nearbyPlaces.placeName));

    }).catch(error => { 
        console.log(error);
    });
}

export default fetchNearbyPlaces;
