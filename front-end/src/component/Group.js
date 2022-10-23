import React from 'react';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';

function Group({ SelctedLocation }) {
    return (
        <>
            <Selector></Selector>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll overscroll-contain'>
                <GroupCard name={SelectedLocation[0].name} type={SelectedLocation[0].type} image={Placeholder} total={SelectedLocation[0].total} rate={SelectedLocation[0].rate}></GroupCard>
                <GroupCard name="Mala Project" type={["Food"]} image={Placeholder}></GroupCard>
                <GroupCard name="Gong Cha" type={["Beverage"]} image={Placeholder}></GroupCard>
                <GroupCard name="Cheli" type={["Food", "Beverage"]} image={Placeholder} ></GroupCard>
            </div>
        </>
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