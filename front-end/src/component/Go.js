import React from 'react';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';

function Group({ SelctedLocation }) {
    return (
        <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll overscroll-contain'>
            <GroupCard name={SelectedLocation[0].name} type={SelectedLocation[0].type} image={Placeholder} total={SelectedLocation[0].total} rate={SelectedLocation[0].rate}></GroupCard>
            <GroupCard name="Mala Project" type={["Food"]} image={Placeholder}></GroupCard>
            <GroupCard name="Gong Cha" type={["Beverage"]} image={Placeholder}></GroupCard>
            <GroupCard name="Cheli" type={["Food", "Beverage"]} image={Placeholder} ></GroupCard>
        </div>
    );
}

// Hard Coded Data Example

const SelectedLocation = [{
    name: "Boba Guys",
    type: ["Beverage", "Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
}]

export default Group;

// fetched data from API
// address_line1: "Daphne Gallery"
// address_line2: "Montague Street, New York, NY 11201, United States of America"
// categories:
//  0: "commercial"
//  1: "commercial.art"

const location = [{
    address_line1: "Daphne Gallery",
    address_line2: "Montague Street, New York, NY 11201, United States of America",
    categories: ["commercial", "commercial.art"],
}]

function longest(arr) {
    return arr.sort(
        function (a, b) {
            return b.length - a.length;
        }
    )[0];
}

let type = longest(location[0].categories);
console.log(type.includes("commercial"));
const arr = type.split(".");
arr.push("commercial");
console.log(arr);
console.log(new Set(arr));
// console.log(longest(location[0].categories));


const GoBtn = () => {
    return (
        <div className='flex justify-center'>
            <button className='bg-blue-500 text-white rounded-full p-2 w-1/3'>Go</button>
        </div>
    );
}