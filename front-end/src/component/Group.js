import './Button.css';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Group({ SelctedLocation }) {

    function fetchFromDB(){
        // axios.get('http://localhost:4000/locations')
        // .then(res => {console.log(res.data);
        //     setSelectedLocations(res.data);}
        // )
        var group_id = "test1";
        axios.get(`http://localhost:4000/locations/group_id/${group_id}`)
        .then(res => {setSelectedLocations(res.data);}
        )
    }

    const [selectedLocations, setSelectedLocations] = useState([]);
    useEffect(() => {
        fetchFromDB();
    }, []);

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
    <GroupCard name={item.name} type={item.type} distance={item.distance} category={item.category} housenumber={item.housenumber} street={item.street} image={Placeholder} vote = {item.vote} key={countGroupCard++}></GroupCard>
));


export default Group;



