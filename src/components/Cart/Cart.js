import React, { useState } from 'react';
import './Cart.css'
import logo from '../../images/pic.jpg';

const Cart = ({cart}) => {

    let total = 0;
    for(const activity of cart){
        total = total + activity.time;
    }

    return (
        <div>
            <div className='personal-info'>
                <img src={logo} alt="" className=''/>
                <h6 className='mt-2'>Md Morsalin</h6>
                <p className='my-2'>Age:28</p>
                <p>Brahmmanbria, Bangladesh</p>
            </div>
            <div className='break-time mt-5'>
                <h4>Break Time</h4>
                <div className=''>
                    <button id='break-time' className='break-btn'>20m</button>
                    <button id='break-time' className='break-btn'>10m</button>
                    <button id='break-time' className='break-btn'>30m</button>
                    <button id='break-time' className='break-btn'>40m</button>
                </div>
            </div>
            <div className='excercise-details pt-4'>
                <h5 className='pb-4'>Dauly Routine Details</h5>
                <div className='routine'>
                <h6>Routine Time</h6>
                <p className='m-0'>{total}m</p>
                </div>           
            </div>
            <div className='break mt-3'>
                <h6>Break Time</h6>
                    <p className='m-0'>0m</p>
            </div>

            <button className='activity-cmp mt-3'>Activity Completed</button>
        </div>
    );
};

export default Cart;