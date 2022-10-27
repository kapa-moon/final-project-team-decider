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
    const [selectIsClicked, setSelectIsClicked] = useState(false);

    function randomSelect(savedLocations) {

        let randomIndex = Math.floor(Math.random() * savedLocations.length);
        let chosenLocation = savedLocations[randomIndex];
        return chosenLocation;

    }

    function handleClick() {
        console.log("clicked");
        setRandomCard(randomSelect(savedLocations));
        setSelectIsClicked(true);
    }

    const GoBtn = () => {
        return (
            <div className='p-4 justify-center'>
                <button onClick={handleClick} className='bg-bubble-pink border-bright text-primary rounded-lg
                p-2 text-sm w-44 h-14'>Select!</button>
            </div>
        );
    }

    const Result = () => {
        if (selectIsClicked) {
            return (
                <GroupCard name={randomCard.name} type={randomCard.type} image={Placeholder} distance={randomCard.distance} category={randomCard.category}></GroupCard>
            );
        } else {
            return (
                <div className='p-16 justify-center'>
                </div>
            );
        }
    }
    // fetch from database: the location with most votes
    const selectedLocation = {
        name: "il laboratorio del gelato",
        distance: 2,
        type: "catering",
        category: "snack",
        housenumber: "188",
        street: "Ludlow Street",
    }

    // let chosenLocation = randomSelect(savedLocations);

    return (
        <>
            <Selector></Selector>
            {/* <div className='gopage overflow-scroll'> */}
            <GoBtn></GoBtn>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll overscroll-contain'>
                {/* <GroupCard name={chosenLocation.name} type={chosenLocation.type} image={Placeholder} distance={chosenLocation.distance} category={chosenLocation.category}></GroupCard> */}
                <Result></Result>

                <p>👇 These locations are most popular among friends:</p>
                <GroupCard name={selectedLocation.name} type={selectedLocation.type} image={Placeholder} distance={selectedLocation.distance} category={selectedLocation.category}></GroupCard>

            </div>
            <Button str_array={['Group Information']} type={6}></Button>
            {/* </div> */}

        </>
    );
}



// Hard Coded Data Example


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

