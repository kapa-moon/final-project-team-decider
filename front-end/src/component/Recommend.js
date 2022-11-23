import React, { useEffect, useState } from "react";
import RecommendCard from './RecommendCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';

var count = 0;
var categories = ['catering', 'leisure', 'commercial'];

function processCategories (set) {
  const a = Array.from(set) 
  return a[a.length-1];
}

function processType (set) {
  for (let item of set) {
    if (categories.includes(item)) {
        return item;
    }
  }
  return 'commercial';
}

function splitElements (array){
    let set = new Set()
    array.forEach(item => {
      let temp = item.split(".");
      for (let subItem of temp) {
        set.add(subItem);
      }
    });
    return set;
}

function Recommend() {
  
  function fetchPlaces (pageNum) {
    var places = [];
    const APIKey = '5b82ca360a754cec8eb085096ff20a32';
    const latitude = -73.9969622;
    const longitude = 40.7264075;
    let radius = 4 * 1000;
    let totalPlaces = pageNum*10;
    const url = 'https://api.geoapify.com/v2/places?categories='+categories.join(",")+'&filter=circle:' +latitude+ ','+longitude+','+radius+'&bias=proximity:-73.99120964730558,40.7362796&limit='+ totalPlaces +'&apiKey=' + APIKey;

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
          var in_miles = geoPlace.properties.distance * 0.000621371
          place['location_id'] = geoPlace.properties.place_id;
          place['vote'] = 0;
          place['distance'] = Math.round(in_miles * 10) / 10;
          place['coordinate'] = coordinate;
          place['placeName'] = geoPlace.properties.name;
          place['type'] = processType(splitElements(geoPlace.properties.categories));
          place['category'] = processCategories(splitElements(geoPlace.properties.categories));
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
  return (
    <>
    <Selector></Selector>
    <dir className='px-0 h-full w-full overflow-scroll overscroll-contain bg-blue-200'>
    <ul>{nearbyPlaces.map(item => (
          <RecommendCard  image = {Placeholder} location = {item} key = {count++}></RecommendCard>
          ))}</ul>
    </dir>
    <Button str_array={['Group Information']} type={6}></Button>
    </>
    );
}

export default Recommend;