import React from 'react';
import './GroupCard.css';
import Bubble from './Bubble';
import Vote from './Vote';
import { useNavigate } from "react-router-dom";

const GroupCard = (props) => {
    let navigate = useNavigate();
    return (
        <div className='group-card'>

            <div className='card-wrapper flex-row gap-0 justify-start shadow-md rounded-3xl w-80 h-36 p-4'>

                <div className='flex justify-start space-x-5 rounded-3xl w-full h-24'>
                    <div className='pic rounded-2xl bg-primary w-32 h-24 overflow-hidden grow-0'>
                        <button className='group_button' onClick={() => navigate('/Map')}><img className='rounded-2xl' src={props.image} alt='food'></img></button>
                    </div>
                    <div className='flex-row pt-2 grow-0'>

                        <Bubble type={props.type} category={props.category}></Bubble>
                        {/* <Bubble type={props.type[1]}></Bubble> */}


                        <p className='font-black text-lg text-left pt-2 pl-2'>{props.distance} <span> miles</span></p>
                        <p className='text-sm font-light text-left pl-2'>from here</p>
                        {/* <p className='font-black text-sm text-left pl-2'> hiu</p> */}

                    </div>
                    <div className='flex-col palce-content-center pt-10 grow-0 items-end'>
                        <Vote className=''></Vote>
                    </div>



                </div>
                <div className='text-lg indent-5 text-left justify-start italic capitalize '><h1>{props.name}</h1></div>


            </div>

        </div>
    );
}



export default GroupCard;