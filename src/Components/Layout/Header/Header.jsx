import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../../assets/Images/Saludable.jpeg';
import '../../../assets/Styles/styles.css'
import { useAuth } from '../../../Contexts/AuthContext';

const Header = () => {
    const history = useHistory();
    const auth = useAuth()

    const redirectTo = (route) =>{
        history.push(route)
    }



    return (
        <div className='headerContainer'>
            <img id='headerLogo' src={logo} alt='Saludable Logo' onClick={()=>{redirectTo('/')}}/>
            <h1 onClick={()=>{redirectTo('/')}}>Saludable</h1>
            <button onClick={()=>redirectTo('/signup')}>Signup</button>
            {auth.currentUser ? <button onClick={()=>auth.handleLogOut()}>LOG OUT</button> : <button onClick={()=>redirectTo('/signin')}>Login</button>}
            
        </div>
    )
}

export default Header
