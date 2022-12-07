import React, { useEffect } from 'react';
import { Component } from 'react';
import './Button.css';
import './Vote.css';
import { useState } from "react";
import axios from 'axios';

function GroupVote(props) {

    const [voteCount, setVoteCount] = useState(props.location.vote);
    const [curGroupID, setCurGroupID] = useState(() => {
        const curGroupID = window.localStorage.getItem('myCurGroup');
       //  return null;
        return !curGroupID ? '000': JSON.parse(curGroupID);
     });

    var entryToVote = {
        group_idx: curGroupID,
        
        location: {   
            group_id: curGroupID,
            location_id: props.location.location_id,
            vote: props.location.vote + 1
        }
    }

    var entryToUnvote = {
        group_idx: curGroupID,
        location:{
            group_id: curGroupID,
            location_id: props.location.location_id,
            vote: props.location.vote - 1
        }
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
            localStorage.setItem('myVotedLocations', JSON.stringify(votedLocations.filter(item => item !== entryToUnvote.location.location_id)));
            setVoted(false);
        }

        setVoteCount(voteCount - 1);
        console.log(entryToUnvote.location.vote);
        if(entryToUnvote.location.vote < 1){
            console.log("vote cannot be less than 0");
            
            axios.post(`${process.env.REACT_APP_BACK_END_URL}/groups/deleteLocation`, {group_idx: curGroupID, location: props.location})
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })

            //  delete from the location that I added to the group
            let c = localStorage.getItem('myLocations');
            const votedLocations = b ? JSON.parse(c) : [];
            if(localStorage.getItem('myLocations')){
                localStorage.setItem('myLocations', JSON.stringify(votedLocations.filter(item => item !== entryToUnvote.location.location_id)));
            }
            window.location.reload();
        }

        axios.post('${process.env.REACT_APP_BACK_END_URL}/groups/updateVote', entryToUnvote)
            .then(res => {
                console.log(res.data);
            }
            )
            .catch(function (error) { console.log(error); })
        
    }

    function vote() {
        let b = localStorage.getItem('myVotedLocations');
        const votedLocations = b ? JSON.parse(b) : [];
        if(localStorage.getItem('myVotedLocations')){
            localStorage.setItem('myVotedLocations', JSON.stringify([...votedLocations, entryToVote.location.location_id]));
            setVoted(true);
        }
        setVoteCount(voteCount + 1);

        axios.post('${process.env.REACT_APP_BACK_END_URL}/groups/updateVote', entryToVote)
            .then(res => {
                console.log(res.data);
            }
            )
        
    }

    function clearMyVotedLocations(){
        localStorage.setItem('myVotedLocations', JSON.stringify([]));
    }


    // voteCount neet to integrate with backend
    

    if(voted){
    return (
        <>
        <button onClick={unvote} className={'bg-sharp-pink text-white voteBox'}>
            {voteCount}
        </button>
        </>
    );
    } else {
        return (
            <>
            <button onClick={vote} className={'bg-cream-yellow text-primary voteBox'}>
                {voteCount}
            </button>
            </>
        );
    }
}

export default GroupVote;