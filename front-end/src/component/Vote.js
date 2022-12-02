import React from 'react';
import { Component } from 'react';
import './Button.css';
import './Vote.css';
import { useState } from "react";


function Vote(props) {

    const [voted, setVoted] = useState(false);
    const [voteCount, setVoteCount] = useState(props.vote);
    const handleClick = () => {
        setVoted(!voted);
        if (voted) {
            setVoteCount(voteCount - 1);
        } else {
            setVoteCount(voteCount + 1);
        }
    };
    return (
        <button onClick={handleClick} className={voted ? 'bg-sharp-pink text-white voteBox' : 'bg-cream-yellow text-primary voteBox'}>
            {voteCount}
        </button>
    );
}

export default Vote;