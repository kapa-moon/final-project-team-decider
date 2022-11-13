import './Button.css';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Group() {

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
    // console.log(user_id);
    // console.log(cur_group_id);
    // console.log(votedLocations);

    // async function fetchFromDB(group_id) {
    //     // axios.get('http://localhost:4000/locations')
    //     // .then(res => {console.log(res.data);
    //     //     setSelectedLocations(res.data);}
    //     // )
    //     // var group_id = "test1";
    //     console.log("my group" + group_id);
    //     axios.get(`http://localhost:4000/locations/group_id/${group_id}`)
    //         .then(res => { setSelectedLocations(res.data); }
    //         )
    // }

    // fetchFromDB(cur_group_id);

    // const [selectedLocations, setSelectedLocations] = useState([]);
    useEffect(() => {
        var group_id = cur_group_id;
        axios.get(`http://localhost:4000/locations/group_id/${group_id}`)
            .then(res => { setSelectedLocations(res.data); }
            )
    }, [cur_group_id]);

    return (
        <>
            <Selector></Selector>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll'>
                <ul>{getGroupCard(selectedLocations)}</ul>
            </div>
            <Button str_array={['Group Information']} type={6}></Button>
        </>
    );
}

var countGroupCard = 0;



const getGroupCard = savedLocations => savedLocations.map(item => (
    <GroupCard name={item.name} type={item.type} distance={item.distance} category={item.category} housenumber={item.housenumber} street={item.street} image={Placeholder} vote={item.vote} key={countGroupCard++}></GroupCard>
));

export default Group;



