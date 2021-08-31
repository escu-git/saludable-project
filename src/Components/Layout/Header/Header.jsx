import React from 'react';
import Login from '../../Pages/Login/Login';
import '../../../assets/Styles/styles.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <img id='headerLogo' src='' alt='Saludable Logo'/>
            <h1>SALUDABLE</h1>
            <Login/>
        </div>
    )
}

export default Header
