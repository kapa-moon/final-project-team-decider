import React from 'react';

function Bubble({ type }) {
    if (type === 'Beverage') {

        return (
            <Beverage type={type} />
        );
    }
    else if (type === 'Food') {
        return (
            <Food type={type} />
        )
    }
}

const Beverage = ({ type }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-fit h-fit rounded-2xl ring-2 ring-border-pink bg-cream'>
                <span className='p-1.5 text-sm'>{type}</span>

            </div>
        </div>
    );
}

const Food = ({ type }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-fit h-fit rounded-2xl ring-2 ring-border-green bg-bubble-green'>
                <span className='p-1.5 text-sm'>{type}</span>

            </div>
        </div>
    );
}

export default Bubble;
