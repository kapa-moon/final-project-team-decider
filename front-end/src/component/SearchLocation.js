import React from 'react';
import {useEffect, useState} from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

function SearchLocation()
{

    const [myCurLocation, setMyCurLocation] = useState(() => {
       const curLocation = window.localStorage.getItem('myCurLocation');
       return curLocation === undefined ? {lat: -73.996925, lng: 40.729675}: JSON.parse(curLocation);
    });

    const [dropdown, setDropdown] = useState([]);
    useEffect(()=>{},[dropdown])

    // const [myCurLocation, setMyCurLocation] = useState(
    //     {lat: -73.996925, lng: 40.729675}
    // );

    useEffect(() => {
        // if(localStorage.getItem('myCurLocation') == JSON.stringify({lat: -73.996925, lng: 40.729675})) {
            window.localStorage.setItem('myCurLocation', JSON.stringify(myCurLocation));
        // }
    }, [myCurLocation]);


    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            localStorage.removeItem("location");
            console.log(e.target.value);
            setMyCurLocation(e.target.value);
            e.target.value = "";
        }
    }

    function handleTyped(e){
      var currentValue = e.target.value;
      var apiKey = 'f05457a48e8345d7b3084421d631d61d';
      var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&limit=5&apiKey=${apiKey}`;
      if (currentValue.length > 3) {
      fetch(url)
        .then(response => {
          // check if the call was successful
          if (response.ok) {
            response.json().then(data => 
              { 
                let dropdown = data.features;
                console.log(dropdown);
                setDropdown(dropdown);
                //<ul>{renderSuggestedLocations()}</ul>
              });
          } else {
            response.json().then(data => console.log(data));
          }
        });
      }
    }

    let count = 0;
    const renderSuggestedLocations = () => 
    dropdown.map((location) => {
      const [lng, lat] = location.geometry.coordinates;
      const address1 = location.properties.address1;
      const address2 = location.properties.address2;
        <li key={count++}>
          <strong>{address1}</strong> <small>{address2}</small>
        </li>
    });

    return(
      <div className='flex justify-center pt-5 pb-4'>
        <div className='flex justify-center items-center w-full h-12 bg-white rounded-xl ring-2 ring-primary'>
          <input className='w-4/5 h-10 bg-white rounded-xl border-primary text-md focus:outline-none' 
          type='search' 
          placeholder='Enter location to find places nearby...' 
          onChange={handleTyped}
          onKeyDown={handleKeyPress}/>
          <div className = 'dropdown'>
            <ul>{dropdown.map(location => (
              <li key={count++}>
              <strong>{location.properties.address_line1}</strong> <small>{location.properties.address_line2}</small>
            </li>
              ))}</ul>
          </div>
          <div className='p-2'>
            <svg className='w-6 h-6 text-gray-500 text-primary' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </div>
        </div>
      </div>
    );
}

export default SearchLocation;