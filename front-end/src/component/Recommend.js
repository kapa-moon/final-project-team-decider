import React, { useEffect, useState } from "react";
import RecommendCard from './RecommendCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';
import Logo from "./Logo";
import SearchLocation from "./SearchLocation";

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

  const [coordinates, setCoordinates] = useState()
  const [nearbyPlaces, setPlaces] = useState([]);
  //{'lng':-73.9969622, 'lat':40.7264075}
  useEffect(() => {
    getCoordinateFromLS();
  }, []);

  useEffect(() => {
    fetchPlaces(2);
  }, [coordinates]);

  async function getCoordinateFromLS(){
    let curLocation = await window.localStorage.getItem('locationToSearch');
    curLocation = (curLocation === undefined) ? {lng: -73.996925, lat: 40.729675}: JSON.parse(curLocation);
    console.log('locationToSearch', curLocation);
    setCoordinates(curLocation);
  }
  
  async function fetchPlaces (pageNum) {
    var places = [];
    const APIKey = process.env.REACT_APP_GEOAPIFY_KEY;
    let longitude = (coordinates!=undefined)? coordinates['lng'] : -73.996925;
    let latitude = (coordinates!=undefined)? coordinates['lat'] : 40.729675;
    console.log('fetch places coordinates', coordinates);
    let radius = 4 * 1000;
    let totalPlaces = pageNum*10;
    const url = `${process.env.REACT_APP_GEOAPIFY_URL}/v2/places?categories=`+categories.join(",")+'&filter=circle:' +longitude+ ','+latitude+','+radius+'&bias=proximity:'+longitude+','+latitude+'&limit='+ totalPlaces +'&apiKey=' + APIKey;

    var requestOptions = {
        method: 'GET',
      };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => { 
        console.log('fetch places result', result.features);
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
          place['placeName'] = geoPlace.properties.name == null ? geoPlace.properties.address_line1 : geoPlace.properties.name;
          place['type'] = processType(splitElements(geoPlace.properties.categories));
          place['category'] = processCategories(splitElements(geoPlace.properties.categories));
          place['address'] = geoPlace.properties.address_line1;
          place['address2'] = geoPlace.properties.address_line2;
          place['neighbourhood'] = geoPlace.properties.neighbourhood;
          places.push(place);
        }
        setPlaces(places);
    }).catch(error => { 
        console.log(error);
    });
  }

  return (
    <>
    <Logo></Logo>
    <SearchLocation></SearchLocation>
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