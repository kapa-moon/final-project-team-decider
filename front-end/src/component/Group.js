import React from 'react';
import './Button.css';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';

function Group({ SelctedLocation }) {
    return (
        <>
            <Selector></Selector>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll overscroll-contain'>
                <ul>{getGroupCard(savedLocations)}</ul>
            </div>
            <Button str_array={['Group Information']} type={6}></Button>
        </>
    );
}

var countGroupCard = 0;

const getGroupCard = savedLocations => savedLocations.map(item => (
    <GroupCard name={item.name} type={item.type} distance={item.distance} category={item.category} housenumber={item.housenumber} street={item.street} image={Placeholder} key={countGroupCard++}></GroupCard>
));


export default Group;

let savedLocations = [
    {
        name: "Kris Graphics",
        distance: 12,
        type: "commercial",
        category: "art",
        housenumber: "129",
        street: "Allen Street",
    },
    {
        name: "il laboratorio del gelato",
        distance: 2,
        type: "catering",
        category: "snack",
        housenumber: "188",
        street: "Ludlow Street",
    },
    {
        name: "Morgenstern's Finest Ice Cream",
        distance: 3,
        type: "catering",
        category: "cafe",
        housenumber: "1",
        street: "Rivington Street",
    },
    {
        name: "Van Leeuwen Ice Cream",
        distance: 4,
        type: "leisure",
        category: "picnic",
        housenumber: "172",
        street: "Ludlow Street",
    },
    {
        name: "Van Leeuwen Ice Cream",
        distance: 4,
        type: "entertainment",
        category: "museum",
        housenumber: "172",
        street: "Ludlow Street",
    },
    {
        name: "Book Culture",
        distance: 4,
        type: "commercial",
        category: "books",
        housenumber: "172",
        street: "Ludlow Street",
    },
    {
        name: "Van Leeuwen Ice Cream",
        distance: 4,
        type: "catering",
        category: "snack",
        housenumber: "172",
        street: "Ludlow Street",
    },

]



