import React from 'react';
import Bubble from './Bubble';

const GroupCard = (props) => {
    return(
        <div className='group-card'>
            <div className='card-wrapper flex-row justify-start shadow-md rounded-3xl w-80 h-36 p-4'>

                <div className='flex justify-start space-x-5 rounded-3xl w-75 h-24'>
                    <div className='pic rounded-2xl bg-primary w-32 h-24 overflow-hidden'>
                        <img className='rounded-2xl' src={props.image} alt='food' />
                    </div>
                    {/* <VoteBox></VoteBox> */}
                    <div className='flex-row'>
                        <div className='flex justify-between'>
                            <Bubble type={props.type[0]}></Bubble>
                            <Bubble type={props.type[1]}></Bubble>
                        </div>

                        <p className='font-black text-lg text-left pt-2 pl-2'>{props.distance}12 min</p>
                        <p className='text-sm font-light text-left pl-2'>from here</p>
                        {/* <img src={Star} alt='star' /> */}
                        <div className='m-0 pt-2 flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-6 m-0 pl-2 '><g><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" fill="#ffe300" data-original="#000000" /></g>
                            </svg>
                            <div className='inline-block align-bottom'>
                                <span>{props.rate}</span>

                                <span className='text-primary font-light text-xs '> / {props.total}</span>
                            </div>

                        </div>

                    </div>



                </div>
                <div className='text-xl indent-5 text-left justify-start italic capitalize '><h1>{props.name}</h1></div>


            </div>

        </div>
    );
}

export default GroupCard;