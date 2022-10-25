import React from 'react';
import './Button.css';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Selector from './Selector';
import Button from './Button';

function Go({SelctedLocation})
{
    return(
        <>
            <Selector></Selector>
            <GoBtn></GoBtn>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll overscroll-contain'>
                <GroupCard name={SelectedLocation[0].name} type={SelectedLocation[0].type} image={Placeholder} total={SelectedLocation[0].total} rate={SelectedLocation[0].rate}></GroupCard>
                <p>The location with most votes:</p>
                <GroupCard name="Gong Cha" type={["Beverage"]} image={Placeholder}></GroupCard>
                
            </div>
            <Button str_array = {['Group Information']} type = {6}></Button>
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

const GoBtn = () => {
    return (
        <div className='justify-center'>
            <button className='bg-bubble-pink border-bright text-primary rounded-lg
            p-2 text-sm w-full h-14'>One Time Select!</button>
        </div>
    );
}
export default Go;