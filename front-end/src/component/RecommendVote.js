import React from 'react';
import { Component } from 'react';
import './Button.css';
import './Vote.css';
import { useState } from "react";
import axios from 'axios';


const RecommendVote = (props) => {

    let entry = {
        group_id: "",
        location_name: "",
        location_address: "",
        longitude: 0,
        latitude: 0,
        distance: 0,
        type: "",
        category: "",
        vote: 0,
    }

    const [voted, setVoted] = useState(false);
    // voteCount neet to integrate with backend
    const [voteCount, setVoteCount] = useState(1);
    const handleClick = () => {
        console.log(props);
        entry = {
            group_id: "test1",
            name: props.location.placeName,
            location_address: "test_location_address",
            longitude: props.location.coordinate.longitude,
            latitude: props.location.coordinate.latitude,
            distance: props.location.distance,
            type: props.location.type,
            category: props.location.category,
            vote: 1,
        }
        setVoted(!voted);
        if (voted) {
            setVoteCount(voteCount - 1);
        } else {
            setVoteCount(voteCount + 1);
            console.log(entry);
            axios.post('http://localhost:4000/locations/add', entry)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
            //window.location = '/group';
        }
    };
    return (
        <button onClick={handleClick} className={voted ? 'bg-sharp-pink text-white voteBox' : 'bg-cream-yellow text-primary voteBox'}>
            {voteCount}
        </button>
    );
}

export default RecommendVote;