import React, { useEffect, useState } from "react";
import RecommendCard from './RecommendCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';

var count = 0;

function Recommend() {

  function fetchPlaces (pageNum) {
    var places = [];
    const APIKey = '5b82ca360a754cec8eb085096ff20a32';
    const latitude = -73.9969622;
    const longitude = 40.7264075;
    let radius = 4 * 1000;
    let totalPlaces = pageNum*10;
    var categories = 'catering';
    const url = 'https://api.geoapify.com/v2/places?categories='+categories+'&filter=circle:' +latitude+ ','+longitude+','+radius+'&bias=proximity:-73.99120964730558,40.7362796&limit='+ totalPlaces +'&apiKey=' + APIKey;

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
        setPlaces(places);
    }).catch(error => { 
        console.log(error);
    });
  }

  const [nearbyPlaces, setPlaces] = useState([]);
    useEffect(() => {
      fetchPlaces(2);
    }, []);

  //console.log(nearbyPlaces);

  return (
    <>
    <Selector></Selector>
    <dir className='px-0 h-full w-full overflow-scroll overscroll-contain bg-blue-200'>
    <ul>{nearbyPlaces.map(item => (
          <RecommendCard name={item.placeName} type = {[item.placeName]} image = {Placeholder} key = {count++}></RecommendCard>
          ))}</ul>
    </dir>
    </>
    );
}

export default Recommend;