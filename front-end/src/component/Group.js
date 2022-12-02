import './Button.css';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Food from '../image/food.png';
import Park from '../image/park.png';
import Museum from '../image/museum.png';
import Selector from './Selector';
import Button from './Button';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Group() {

    const [curGroupID, setCurGroupID] = useState(() => {
        const curGroupID = window.localStorage.getItem('myCurGroup');
        return !curGroupID ? '000': JSON.parse(curGroupID);
     });

     console.log(curGroupID);

    const [groupLocations, setGroupLocations] = useState("");
 
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
         console.log(groupLocations[0]);
     }, []);

    const [user_id, setUser_id] = useState("");
    const [cur_group_id, setGroup_id] = useState("");
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [votedLocations, setVotedLocations] = useState([]);

    function getUserID() {
        axios.get(`http://localhost:4000/user/`)
            .then(res => {
                setUser_id(res.data[2].user_id);
                setGroup_id(res.data[2].current_group);
                setVotedLocations(res.data[2].voted_locations);
            }
            )
            .catch(function (error) { console.log(error); })
    }
    useEffect(() => {
        getUserID();
    }, []);
    
    useEffect(() => {
        var group_id = cur_group_id;
        if (group_id) {
            axios.get(`http://localhost:4000/locations/group_id/${group_id}`)
                .then(res => { setSelectedLocations(res.data); }
                )
        }
    }, [cur_group_id]);

    return (
        <>
            <Logo />
            <SearchBar />
            <Selector></Selector>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll'>
                <ul>{getGroupCard(Array.from(groupLocations))}</ul>
            </div>
            <Button str_array={['Group Information']} type={6}></Button>
        </>
    );
}

var countGroupCard = 0;



const getGroupCard = savedLocations => savedLocations.map(item => (
    <GroupCard location={item} name={item.name} type={item.type} distance={item.distance} category={item.category} housenumber={item.housenumber} street={item.street} vote={item.vote} key={countGroupCard++}></GroupCard>
));

export default Group;



