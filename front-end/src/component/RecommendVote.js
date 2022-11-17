import React, { useEffect } from 'react';
import { Component } from 'react';
import './Button.css';
import './Vote.css';
import { useState } from "react";
import axios from 'axios';


const RecommendVote = (props) => {

    const [user_id, setUser_id] = useState("");
    const [cur_group_id, setGroup_id] = useState("");

    function getUserID() {
        axios.get(`http://localhost:4000/user/`)
            .then(res => {

                setUser_id(res.data[2].user_id);
                setGroup_id(res.data[2].current_group);
            }
            )
            .catch(function (error) { console.log(error); })
    }
    useEffect(() => {
        getUserID();
    }, []);
    console.log(user_id);
    console.log(cur_group_id);

    function addToUsersVoteLocations() {
        var vote = {
            location_id: cur_group_id,
            user_id: user_id,
        }
        axios.post(`http://localhost:4000/vote/`, vote)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })
    }

    var entry = {
        _id: "",
        group_id: cur_group_id,
        location_id: props.location.location_id,
        name: props.location.placeName,
        location_address: "test_location_address",
        longitude: props.location.coordinate.longitude,
        latitude: props.location.coordinate.latitude,
        distance: props.location.distance,
        type: props.location.type,
        category: props.location.category,
        vote: props.location.vote,
    }

    const [voted, setVoted] = useState(false);

    // voteCount neet to integrate with backend
    const [voteCount, setVoteCount] = useState(props.location.vote);
    const [object_id, setObject_id] = useState("");
    useEffect(() => {
        fetchLocationFromDB(props.location.location_id);
    }, []);

    function fetchLocationFromDB(location_id) {
        axios.get(`http://localhost:4000/locations/location_id/${location_id}`)
            .then(res => {
                if (res.data.length == 0) {
                    setVoteCount(0);
                } else {
                    setVoteCount(res.data[0].vote);
                    setObject_id(res.data[0]._id);
                }
            })
            .catch(function (error) { console.log(error); })
    }

    const handleClick = () => {
        console.log(entry);

        var locationAndUser = {
            location_id: props.location.location_id,
            user_id: user_id,
        }

        setVoted(!voted);
        if (voted) {
            setVoteCount(voteCount - 1);
            entry.vote = voteCount - 1;
            entry._id = object_id;
            if (voteCount-1 == 0) {
                axios.delete(`http://localhost:4000/locations/location_id/${entry.location_id}`, entry)
                .then(res => console.log(res.data));
            } else {
                axios.post(`http://localhost:4000/locations/update/${object_id}`, entry)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

            axios.post(`http://localhost:4000/user/unvote`, locationAndUser)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
            }
        } else {
            setVoteCount(voteCount + 1);
            entry.vote = voteCount + 1;
            entry._id = object_id;
            console.log(entry);
            if (voteCount == 0) {
                axios.post('http://localhost:4000/locations/add', entry)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));
                //window.location = '/group';
                axios.post('http://localhost:4000/user/vote', locationAndUser)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));

            } else {
                axios.post(`http://localhost:4000/locations/update/${entry._id}`, entry)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));

                axios.post('http://localhost:4000/user/vote', locationAndUser)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));
            }
        }
    };
    return (
        <button onClick={handleClick} className={voted ? 'bg-sharp-pink text-white voteBox' : 'bg-cream-yellow text-primary voteBox'}>
            {voteCount}
        </button>
    );
}

export default RecommendVote;