import React, {useState, useEffect} from 'react';
import './Button.css';
import GroupCard from './GroupCard';
import Placeholder from '../image/pic1.png';
import Select from './Select';
import Button from './Button';
import SearchBar from './SearchBar';
import Selector from './Selector';
import { Link } from 'react-router-dom';
import Search_bar from './Search_bar';


import Logo from './Logo';

function Search({ SelctedLocation })
{
    let [data, set_data] = useState({});
    useEffect(() =>
    {
        fetch('http://localhost:4000/search/api/get_list')
        .then(res => res.json())
        .then(data => set_data(data));
    }, []);

    let [search_result, set_search_result] = useState({});
    useEffect(() =>
    {
        fetch('http://localhost:4000/search/search')
        .then(res => res.json())
        .then(search_result => set_search_result(search_result));
    }, []);

    return (
        <>
            <Logo></Logo>
            <Search_bar></Search_bar>
            <Selector></Selector>
            <div className='bg-blue-200 flex-col justify-center space-y-3 max-w-sm h-full overflow-scroll'>
                <ul>{search_result.length ? getGroupCard(search_result) : 'no matching result'}</ul> {/* <ul>{data.length ? getGroupCard(data) : ''}</ul> */}
            </div>
            <Button str_array={['Group Information']} type={6}></Button>
        </>
    );
}

var countGroupCard = 0;

const getGroupCard = savedLocations => savedLocations.map(item => (
    <GroupCard name={item.name} type={item.type} distance={item.distance} category={item.category} housenumber={item.housenumber} street={item.street} image={Placeholder} key={countGroupCard++}></GroupCard>
));


export default Search;