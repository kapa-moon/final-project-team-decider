import React from 'react';
import RecommendCard from './RecommendCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';

function Recommend({ SelctedLocation }) {
    return(
      <>
        <Selector></Selector>
        <dir className='px-0 h-full w-full overflow-scroll overscroll-contain bg-blue-200'>
          <ul>{getCard(SelectedLocation)}</ul>
        </dir>
      </>
    );
}

var count = 0;

const getCard = SelectedLocation => SelectedLocation.map(item => (
    <RecommendCard name={item.name} type = {item.type} image = {Placeholder} key = {count++}></RecommendCard>
  ));

const SelectedLocation = [
    { name: "Boba Guys",
    type: ["Beverage", "Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198, 
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
]

export default Recommend;