import React from 'react';
// import { mo } from '../../tailwind.config';

function Bubble({ type }) {
    if (type === 'commercial') {

        return (
            <Commercial content={type} />
        );
    }
    else if (type === 'catering') {
        return (
            <Catering type={type} />
        )
    }
    else if (type === 'leisure') {
        return (
            <Catering type={type} />
        )
    } else {
        return (
            <Others type={type} />
        )
    }
}

const Commercial = ({ content }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-fit h-fit rounded-2xl ring-2 ring-border-pink bg-bubble-pink'>
                <span className='p-1.5 text-sm'>{content}</span>

            </div>
        </div>
    );
}

const Catering = ({ type }) => {
    return (
        <div className='bubble-wrapper pl-2 pr-2'>
            <div className='w-fit h-fit rounded-2xl ring-2 ring-border-orange bg-bubble-orange'>
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
