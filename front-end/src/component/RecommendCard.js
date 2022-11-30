import React from 'react';
import { useEffect, useState } from 'react';
import './RecommendCard.css';
import Bubble from './Bubble';
import RecommendVote from './RecommendVote.js';
import RecommendAdd from './RecommendAdd';
import { useNavigate } from "react-router-dom";
import Food from '../image/food.png';
import Shop from '../image/shop.png';
import Park from '../image/park.png';  
import Museum from '../image/museum.png';

const RecommendCard = (props) => {
    let navigate = useNavigate();
    const [image, setImage] = useState(Food);
    useEffect(() => {
        if (props.location.type === 'commercial') {
            setImage(Shop);
        } else if (props.location.type === 'catering') {
            setImage(Food);
        }else if (props.location.type === 'leisure') {
            setImage(Park);
        }else {
            setImage(Food);
        }
    }, [props.type]);

    return (
        <div className='group-card'>

        <div className='card-wrapper flex-row gap-0 justify-start shadow-md rounded-3xl w-80 h-36 p-4'>

            <div className='flex justify-start space-x-5 rounded-3xl w-full h-24'>
                <div className='pic rounded-2xl bg-primary w-32 h-24 overflow-hidden grow-0'>
                    <button className='group_button' onClick={() => navigate('/Map')}><img className='rounded-2xl' src={image} alt='food'></img></button>
                </div>
                <div className='flex-row pt-2 grow-0'>

                    <Bubble type={props.location.type} category={props.location.category}></Bubble>
                    {/* <Bubble type={props.type[1]}></Bubble> */}


                    <p className='font-black text-lg text-left pt-2 pl-2'>{props.location.distance} <span> miles</span></p>
                    <p className='text-sm font-light text-left pl-2'>from here</p>
                    {/* <p className='font-black text-sm text-left pl-2'> hiu</p> */}

                </div>
                <div className='flex-col palce-content-center pt-10 grow-0 items-end'>
                    {/* <RecommendVote location = {props.location} className=''></RecommendVote> */}
                    <RecommendAdd location = {props.location} className=''></RecommendAdd>
                </div>

            </div>
            <div className='text-lg indent-5 text-left justify-start italic capitalize '><h1>{props.location.placeName}</h1></div>


        </div>

    </div>
    );
}

export default RecommendCard;