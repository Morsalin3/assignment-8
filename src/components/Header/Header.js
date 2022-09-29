import React from 'react';
import logo from '../../images/lifestyle.png'
import './Header.css'

const Header = () => {
    return (
        <div className='container mt-5'>  
            <div className='header'>
                    <img src={logo} alt="" className=''></img>
                    <h2 className='title ms-2'>ULTRA-ACTIVE-LIFE</h2>
                    
            </div>
        </div>
    );
};

export default Header;