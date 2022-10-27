import React from 'react';
// import { mo } from '../../tailwind.config';

function Bubble({ category, type }) {
    if (type === 'commercial') {

        return (
            <Commercial content={category} />
        );
    }
    else if (type === 'catering') {
        return (
            <Catering type={category} />
        )
    }
    else if (type === 'leisure') {
        return (
            <Leisure type={category} />
        )
    } else {
        return (
            <Others type={category} />
        )
    }
}

const Commercial = ({ type }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-fit h-fit rounded-2xl ring-2 ring-border-pink bg-bubble-pink'>
                <span className='p-1.5 text-sm'>{type}</span>

            </div>
        </div>
    );
}

const Catering = ({ type }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-18 h-fit rounded-2xl ring-2 ring-border-orange bg-bubble-orange'>
                <span className='p-1.5 text-sm'>{type}</span>

            </div>
        </div>
    );
}

const Leisure = ({ type }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-fit h-fit rounded-2xl ring-2 ring-border-green bg-bubble-green'>
                <span className='p-1.5 text-sm'>{type}</span>

            </div>
        </div>
    );
}

const Others = ({ type }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-fit h-fit rounded-2xl ring-2 ring-border-blue bg-bubble-blue'>
                <span className='p-1.5 text-sm'>{type}</span>

            </div>
        </div>
    );
}

export default Bubble;
