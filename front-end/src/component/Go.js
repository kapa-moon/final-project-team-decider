import React from 'react';
import { Component } from 'react';
import './Button.css';
import GoCard from './GoCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Button from './Button';
import { useState, useEffect } from "react";
import axios from 'axios';

function Go({ SelctedLocation, SavedLocations }) {

    const [curGroupID, setCurGroupID] = useState(() => {
        const curGroupID = window.localStorage.getItem('myCurGroup');
       //  return null;
        return !curGroupID ? '000': JSON.parse(curGroupID);
     });

    const [groupLocations, setGroupLocations] = useState([]);
    const [mostVotedLocation, setMostVotedLocation] = useState("");

    function getGroupLocations() {
        axios.get(`http://localhost:4000/groups/idx/${curGroupID}`)
            .then(res => {
                setGroupLocations(res.data[0].locations);
            }
            )
            .catch(function (error) { console.log(error); })
    }
    useEffect(() => {
        getGroupLocations();
        console.log(Array.from(groupLocations));
        
    }, []);

    function getMostVotedLocation() {
        setMostVotedLocation(groupLocations[0]);
        // console.log(JSON.parse(groupLocations[0]));
    }
    useEffect(() => {
        getMostVotedLocation();
    }, [groupLocations]);

    const [randomCard, setRandomCard] = useState({});
    const [selectIsClicked, setSelectIsClicked] = useState(false);

    function randomSelect(groupLocations) {

        let randomIndex = Math.floor(Math.random() * groupLocations.length);
        let chosenLocation = groupLocations[randomIndex];
        setRandomCard(chosenLocation);
        const locationSelected = {
            group_idx: curGroupID,
            location: chosenLocation
        }
        axios.post(`http://localhost:4000/groups/setSelectedLocation`, locationSelected)
                .then(res => {
                    console.log(res.data);
                })
                .catch(function (error) { console.log(error); });
        return chosenLocation;

    }

    // get random selected location if there are locations in the group
    const [currentResult, setCurrentResult] = useState({});

    async function getCurrentResult() {
        axios.get(`http://localhost:4000/groups/idx/${curGroupID}`)
            .then(res => {
                setCurrentResult(res.data[0].selectedLocation);
            }
            )
            .catch(function (error) { console.log(error); })
    }
    useEffect(() => {
        getCurrentResult();
    }, []);
    console.log('currentResult'+currentResult);

    function handleClick() {
        console.log("clicked");
        setRandomCard(randomSelect(groupLocations));
        setSelectIsClicked(true);
        window.location.reload();
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
        if (currentResult) {
            return (
                <GoCard location={currentResult} vote={currentResult.vote} name={currentResult.name} type={currentResult.type} image={Placeholder} distance={currentResult.distance} category={currentResult.category}></GoCard>
            );
        } else {
            return (
                <div className='p-16 justify-center'>
                </div>
            );
        }
    }

    const MostVoted = () => {
        if (mostVotedLocation) {
            return (
                <GoCard location={mostVotedLocation} vote={mostVotedLocation.vote} name={mostVotedLocation.name} type={mostVotedLocation.type} image={Placeholder} distance={mostVotedLocation.distance} category={mostVotedLocation.category}></GoCard>
            );
        } else {
            return (
                <div className='p-16 justify-center'>
                </div>
            );
        }
    }

    return (
        <>
            <Logo></Logo>
            <SearchBar></SearchBar>
            <Selector></Selector>
            <GoBtn></GoBtn>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll overscroll-contain'>
                {/* <GroupCard name={chosenLocation.name} type={chosenLocation.type} image={Placeholder} distance={chosenLocation.distance} category={chosenLocation.category}></GroupCard> */}
                <Result></Result>


                <p>👇 These locations are most popular among friends:</p>
                <MostVoted></MostVoted>
                {/* <GroupCard name={mostVotedLocation.name} type={mostVotedLocation.type} image={Placeholder} distance={mostVotedLocation.distance} category={mostVotedLocation.category} vote={mostVotedLocation.vote}></GroupCard> */}

            </div>
            <Button str_array={['Group Information']} type={6}></Button>

        </>
    );
}



// Hard Coded Data Example


export default Go;


