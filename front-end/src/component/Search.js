import React, { useEffect, useState, useRef } from "react";
import RecommendCard from './RecommendCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';
import Logo from "./Logo";
import Search_bar from './Search_bar_new';

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

function Search() {
  
  let places = [];
  function fetchPlaces (pageNum) {
    places = [];
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

    let input_ref = useRef(null);
    let search_result = [];
    let field_array = ['location_id', 'vote', 'distance', 'coordinate', 'placeName', 'type', 'category'];
    let [search_res, set_search_res] = useState([]);
    let [found, set_found] = useState(false);

    function handle_search()
    {
        let search_keyword = input_ref.current.value;
        set_found(false);
        for(let i = 0; i < nearbyPlaces.length; ++i)
        {
          for(let j = 0; j < field_array.length; ++j)
          {
            if(nearbyPlaces[i][field_array[j]] && nearbyPlaces[i][field_array[j]].toString().toLowerCase().includes(search_keyword.toString().toLowerCase()))
            {
              search_result.push(nearbyPlaces[i]);
              set_found(true);
              break;
            }
          }
        }
        set_search_res(search_result);
        search_keyword = '';
    }

    useEffect(() =>
    {
      console.log(search_res);
    }, []);

  function get_card(card)
  {
    return card.map(item => (<RecommendCard image = {Placeholder} location = {item} key = {count++}></RecommendCard>));
  } 

  return (
    <>
    <Logo></Logo>
    <div className='flex justify-center pt-5 pb-4'>
        <div className='flex justify-center items-center w-full h-12 bg-white rounded-xl ring-2 ring-primary'>
          <input className='w-4/5 h-10 bg-white rounded-xl border-primary text-md focus:outline-none'
          type='search' placeholder='Find location...' ref = {input_ref}/>
          <div className='p-2'>
            <button className = 'search_bar0' onClick = {handle_search}><svg className='w-6 h-6 text-gray-500 text-primary' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg></button>
          </div>
        </div>
      </div>
    <Selector></Selector>
    <dir className='px-0 h-full w-full overflow-scroll overscroll-contain bg-blue-200'>
    <ul>{
            search_res.length ? get_card(search_res) : get_card(nearbyPlaces)
        }</ul>
    </dir>
    <Button str_array={['Group Information']} type={6}></Button>
    </>
    );
}

export default Search;