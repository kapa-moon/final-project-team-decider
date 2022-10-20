import React from 'react';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';

function Recommend({ SelctedLocation }) {
    return <ul>{getCard(SelectedLocation)}</ul>;
}

var count = 0;

const getCard = SelectedLocation => SelectedLocation.map(item => (
    <GroupCard name={item.name} type = {item.type} image = {Placeholder} key = {count++}></GroupCard>
  ));


// Hard Coded Data Example

const SelectedLocation = [
    { name: "Boba Guys",
    type: ["Beverage", "Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,},
]

export default Recommend;