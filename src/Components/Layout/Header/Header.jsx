import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../../assets/Images/Saludable.jpeg';
import '../../../assets/Styles/styles.css'

const Header = () => {

    const history = useHistory();

    const redirectTo = (route) =>{
        history.push(route)
    }



    return (
        <div className='headerContainer'>
            <img id='headerLogo' src={logo} alt='Saludable Logo' onClick={()=>{redirectTo('/')}}/>
            <h1 onClick={()=>{redirectTo('/')}}>Saludable</h1>
            <button onClick={()=>redirectTo('/signin')}>Login</button>
            <button onClick={()=>redirectTo('/signup')}>Signup</button>
        </div>
    )
}

export default Header
