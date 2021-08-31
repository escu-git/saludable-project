import React from 'react';
import '../../../assets/Styles/styles.css'
import logo from '../../../assets/Images/Saludable.jpeg';
const Header = () => {
    return (
        <div className='headerContainer'>
            <img id='headerLogo' src={logo} alt='Saludable Logo'/>
            <h1>Saludable</h1>
            <button>Login</button>
        </div>
    )
}

export default Header
