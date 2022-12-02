import React, { useEffect } from 'react';
import { Component } from 'react';
import './Button.css';
import './Vote.css';
import { useState } from "react";
import axios from 'axios';

function GroupVote(props) {

    const [curGroupID, setCurGroupID] = useState(() => {
        const curGroupID = window.localStorage.getItem('myCurGroup');
       //  return null;
        return !curGroupID ? '000': JSON.parse(curGroupID);
     });

    var entry = {
        _id: "",
        group_id: curGroupID,
        location_id: props.location.location_id,
        name: props.location.name,
        location_address: "test_location_address",
        longitude: props.location.longitude,
        latitude: props.location.latitude,
        distance: props.location.distance,
        type: props.location.type,
        category: props.location.category,
        vote: props.location.vote + 1,
    }

    



    const [voted, setVoted] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('myVotedLocations')){
            let votedLocations = JSON.parse(localStorage.getItem('myVotedLocations'));
            if (votedLocations.includes(props.location.location_id)){
                setVoted(true);
            }
        }
    }, []);

    function unvote() {
        let b = localStorage.getItem('myVotedLocations');
        const votedLocations = b ? JSON.parse(b) : [];
        if(localStorage.getItem('myVotedLocations')){
            localStorage.setItem('myVotedLocations', JSON.stringify(votedLocations.filter(item => item !== entry.location_id)));
            setVoted(false);
        }

        const locationToDel = {
            group_idx: curGroupID,
            location: entry,
        }

        axios.post(`http://localhost:4000/groups/deleteLocation`, locationToDel)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })
            
        
        var updatedEntry = {
            _id: entry._id,
            group_id: entry.group_id,
            location_id: entry.location_id,
            name: entry.name,
            location_address: entry.location_address,
            longitude: entry.longitude,
            latitude: entry.latitude,
            distance: entry.distance,
            type: entry.type,
            category: entry.category,
            vote: entry.vote - 1,
        }

        const locationToUpdate = {
            group_idx: curGroupID,
            location: updatedEntry,
        }

        axios.post(`http://localhost:4000/groups/addLocation`, locationToUpdate)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })
        
    }

    function vote() {
        let b = localStorage.getItem('myVotedLocations');
        const votedLocations = b ? JSON.parse(b) : [];
        if(localStorage.getItem('myVotedLocations')){
            localStorage.setItem('myVotedLocations', JSON.stringify([...votedLocations, entry.location_id]));
            setVoted(true);
        }
        
    }


    // voteCount neet to integrate with backend
    const [voteCount, setVoteCount] = useState(props.vote);
    const handleClick = () => {
        console.log(props);
        setVoted(!voted);
        if (voted) {
            setVoteCount(voteCount - 1);
        } else {
            setVoteCount(voteCount + 1);
        }
    };
    return (
        <>
        <button onClick={handleClick} className={voted ? 'bg-sharp-pink text-white voteBox' : 'bg-cream-yellow text-primary voteBox'}>
            {voteCount}
        </button>
        <button onClick={unvote}>unvote</button>
        <button onClick={vote}>vote</button>
        </>
    );
}

export default GroupVote;