import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../../assets/Images/Saludable.jpeg';
import '../../../assets/Styles/styles.css'

const Header = () => {
    const history = useHistory();
    const goHome = () =>{
        history.push('/')
    }
    return (
        <div className='headerContainer'>
            <img id='headerLogo' src={logo} alt='Saludable Logo' onClick={()=>{goHome()}}/>
            <h1 onClick={()=>{goHome()}}>Saludable</h1>
            <button>Login</button>
        </div>
    )
}

export default Header
