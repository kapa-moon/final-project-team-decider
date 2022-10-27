import React from 'react';
import { Component } from 'react';
import './Button.css';
import Vote from './Vote.js';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';
import { useState, useEffect } from "react";

function Go({ SelctedLocation, SavedLocations }) {

    const [randomCard, setRandomCard] = useState({});

    function randomSelect(savedLocations) {

        let randomIndex = Math.floor(Math.random() * savedLocations.length);
        let chosenLocation = savedLocations[randomIndex];
        return chosenLocation;

    }

    function handleClick() {
        console.log("clicked");
        setRandomCard(randomSelect(savedLocations));
    }

    const GoBtn = () => {
        return (
            <div className='p-4 justify-center'>
                <button onClick={handleClick} className='bg-bubble-pink border-bright text-primary rounded-lg
                p-2 text-sm w-44 h-14'>Select!</button>
            </div>
        );
    }

    let chosenLocation = randomSelect(savedLocations);

    console.log(len);
    return (
        <>
            <Selector></Selector>
            {/* <div className='gopage'> */}
            <GoBtn></GoBtn>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll overscroll-contain'>
                <GroupCard name={chosenLocation.name} type={chosenLocation.type} image={Placeholder} distance={chosenLocation.distance} category={chosenLocation.category}></GroupCard>

                <p>👇 These locations are most popular among friends:</p>
                {/* <Vote></Vote> */}
                <GroupCard name={SelectedLocation[0].name} type={SelectedLocation[0].type} image={Placeholder} distance={SelectedLocation[0].distance} category={chosenLocation.category}></GroupCard>

            </div>
            <Button str_array={['Group Information']} type={6}></Button>
            {/* </div> */}

        </>
    );
}



// Hard Coded Data Example

const SelectedLocation = [{
    name: "il laboratorio del gelato",
    distance: 2,
    type: "catering",
    category: "snack",
    housenumber: "188",
    street: "Ludlow Street",
}]


export default Go;





// should be fetched from database

const savedLocations = [
    {
        name: "Kris Graphics",
        distance: 12,
        type: "commercial",
        category: "art",
        housenumber: "129",
        street: "Allen Street",
    },
    {
        name: "il laboratorio del gelato",
        distance: 2,
        type: "catering",
        category: "snack",
        housenumber: "188",
        street: "Ludlow Street",
    },
    {
        name: "Morgenstern's Finest Ice Cream",
        distance: 3,
        type: "catering",
        category: "cafe",
        housenumber: "1",
        street: "Rivington Street",
    },
    {
        name: "Van Leeuwen Ice Cream",
        distance: 4,
        type: "leisure",
        category: "picnic",
        housenumber: "172",
        street: "Ludlow Street",
    },
    {
        name: "Van Leeuwen Ice Cream",
        distance: 4,
        type: "entertainment",
        category: "museum",
        housenumber: "172",
        street: "Ludlow Street",
    },
    {
        name: "Book Culture",
        distance: 4,
        type: "commercial",
        category: "books",
        housenumber: "172",
        street: "Ludlow Street",
    },
    {
        name: "Van Leeuwen Ice Cream",
        distance: 4,
        type: "catering",
        category: "snack",
        housenumber: "172",
        street: "Ludlow Street",
    },

]
const len = savedLocations.length;

