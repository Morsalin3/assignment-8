import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';
import './Activity.css'

const Activity= () => {
    const [activities , setActivities] = useState([]);
    const [cart, setCart ] = useState([]);

    useEffect(() => {
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    const handleAddToSecond =(activity) =>{
        // console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
       }
    return (
        <div className='container mt-4'>
            <h4 className='select'>Select Your Activity</h4>
            <div className='activity-container'>
                
                <div className='activity'>
                    {
                        activities.map(activity => <Activities
                        key={activity.id}
                        activity={activity}
                        handleAddToSecond={handleAddToSecond}
                            
                        ></Activities>)
                    }

                </div>
                <div className='activity-info p-4'>
                    {/* <h4>cart{cart.length}</h4> */}
                    <Cart cart={cart}></Cart>

                </div>
            </div>

        </div>
    );
};

export default Activity;