import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => (
    <div className='overview'>
        <span className='rating'></span> {/*.rating*/}
        <p className='genre'><h4>Genre</h4> One, Two, Three</p> {/*.genre*/}
        <p className='runtime'><h4>Run-Time</h4> 2h 2min</p> {/*.runtime*/}
        <p className='released'><h4>Released</h4> 4 Oct 2019 (CAN)</p> {/*.released*/}
    </div>
);

export default Overview;