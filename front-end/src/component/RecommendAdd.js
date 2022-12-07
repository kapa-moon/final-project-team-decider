import React, { useEffect } from 'react';
import { Component } from 'react';
import './Button.css';
import './Vote.css';
import { useState } from "react";
import axios from 'axios';
import { set } from 'mongoose';


const RecommendAdd = (props) => {

    const [user_id, setUser_id] = useState("");
    const [cur_group_id, setGroup_id] = useState("");

    const [curGroupID, setCurGroupID] = useState(() => {
        const curGroupID = window.localStorage.getItem('myCurGroup');
       //  return null;
        return !curGroupID ? '000': JSON.parse(curGroupID);
     });

    const locations = localStorage.getItem('myLocations') ? JSON.parse(localStorage.getItem('myLocations')) : [];
    localStorage.setItem('myLocations', JSON.stringify(locations));

    function getUserID() {
        axios.get(`${process.env.REACT_APP_BACK_END_URL}/user/`)
            .then(res => {

                setUser_id(res.data[2].user_id);
                setGroup_id(res.data[2].current_group);
            }
            )
            .catch(function (error) { console.log(error); })
    }

    function addmap() {
        var map1 = new Map();
        map1.set(curGroupID, ['1', '2', '3']);
        map1.set(curGroupID, map1.get(curGroupID).push(props.location_id));
        console.log(map1);
        console.log(map1.get(curGroupID));
        localStorage.setItem('myLocations2', JSON.stringify(map1));
      }

    useEffect(() => {
        getUserID();
    }, []);
    // console.log(user_id);
    // console.log(cur_group_id);

    function addToUsersVoteLocations() {
        var vote = {
            location_id: cur_group_id,
            user_id: user_id,
        }
        axios.post(`${process.env.REACT_APP_BACK_END_URL}/vote/`, vote)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })
    }

    var entry = {
        _id: "",
        group_id: curGroupID,
        location_id: props.location.location_id,
        name: props.location.placeName,
        location_address: "test_location_address",
        longitude: props.location.coordinate.longitude,
        latitude: props.location.coordinate.latitude,
        distance: props.location.distance,
        type: props.location.type,
        category: props.location.category,
        vote: props.location.vote + 1,
    }

    // use AddedByMe to set Add Button Color

    const [addedByMe, setAddedByMe] = useState(false);
    
    useEffect(() => {
        let a = localStorage.getItem('myLocations');
        if(a){
            const locations = JSON.parse(a);
            if(locations.includes(props.location.location_id)){
                setAddedByMe(true);
                console.log(curGroupID);
                console.log("idx")
                console.log(props);
            }
        }
    }, []);

    const [groupLocations, setGroupLocations] = useState("");
    const [groupLocationsID, setGroupLocationsID] = useState([]);

    function getGroupLocations() {
        axios.get(`${process.env.REACT_APP_BACK_END_URL}/groups/idx/${curGroupID}`)
            .then(res => {
                setGroupLocations(res.data[0].locations);
                setGroupLocationsID(res.data[0].locations.map((location) => location.location_id));
            }
            )
            .catch(function (error) { console.log(error); })
    }
    useEffect(() => {
        getGroupLocations();
    }, []);

    const handleClickAdd = () => {
        console.log(entry);
        console.log("clicked");
        // get the current value in local storage
        let a = localStorage.getItem('myLocations');
        const locations = a ? JSON.parse(a) : [];
        let b = localStorage.getItem('myVotedLocations');
        const votedLocations = b ? JSON.parse(b) : [];
        if (locations.includes(entry.location_id)) {
            console.log("already added");
        }else{
            locations.push(entry.location_id);
            votedLocations.push(entry.location_id);
        }
        localStorage.setItem('myLocations', JSON.stringify(locations));
        localStorage.setItem('myVotedLocations', JSON.stringify(votedLocations));

        
        // add to group database
        console.log("groupLocationID: "+groupLocationsID);
        if(!groupLocationsID.includes(entry.location_id)){
        const locationToAdd = {
            group_idx: curGroupID,
            location: entry,
        }

        axios.post(`${process.env.REACT_APP_BACK_END_URL}/groups/addLocation`, locationToAdd)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })
        setAddedByMe(true);
        }else{
            alert("Already added by another group member!");
            console.log("already added by other group members");
            setAddedByMe(true);
        }
    };

    const handleClickDel = () => {
        console.log(entry);

        console.log("clicked");

        // delete from local storage
        let a = localStorage.getItem('myLocations');
        const locations = a ? JSON.parse(a): '';
        let b = localStorage.getItem('myVotedLocations');
        const votedLocations = b ? JSON.parse(b) : [];
        console.log(locations);

        if (locations.includes(entry.location_id)) {
            localStorage.setItem('myLocations', JSON.stringify(locations.filter(item => item !== entry.location_id)));
            console.log("location deleted!");
            localStorage.setItem('myVotedLocations', JSON.stringify(votedLocations.filter(item => item !== entry.location_id)));

        }else{
            console.log("location wasn't added!");
        }

        // localStorage.setItem('myLocations', JSON.stringify(locations));

        // delete from groups' database

        const locationToDel = {
            group_idx: curGroupID,
            location: entry,
        }

        axios.post(`${process.env.REACT_APP_BACK_END_URL}/groups/deleteLocation`, locationToDel)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })
        setAddedByMe(false);



        var locationAndUser = {
            location_id: props.location.location_id,
            user_id: user_id,
        }

        // window.location.reload();

    };


    function deletion() {
        localStorage.setItem('myLocations',[]);
        console.log("cleared");
    }


    if(addedByMe){
    return (
        <>
            <button onClick={handleClickDel} className={'bg-sharp-pink text-white text-sm voteBox'}>
                Del
            </button>
            {/* <button onClick={deletion}>Clear
                </button> */}
        </>
        
    );}
    else{
        return (
            <>
                <button onClick={handleClickAdd} className={'bg-cream-yellow text-primary voteBox'}>
                    Add
                </button>
                {/* <button onClick={deletion}>Clear
                </button> */}
                {/* <button onClick={addmap}>addmap</button> */}
            </>
            
        );
    }
}

export default RecommendAdd;