import React from 'react';
import './Activities.css'

const Activities = ({activity,handleAddToSecond}) => {
    const { img, name , description, time} = activity;

    return (
        <div className='activities'>
            <div className='activities-img mt-3'>
                <img src={img} alt='' className='text-center'></img>
            </div>
            <div className='p-3 pt-2'>
                <h4 className=''>{name}</h4>
                <p>{description}</p>
                <h6>Time required:{time}M</h6>

                <button onClick={()=>handleAddToSecond(activity)} className='btn-add border-0 rounded rouded-2 w-100 p-2'>Add to list</button>
            </div>
        </div>
    );
};

export default Activities;