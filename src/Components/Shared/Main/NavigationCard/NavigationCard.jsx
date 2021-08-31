import React,{useState} from 'react'
import { useHistory } from 'react-router';
import '../../../../assets/Styles/styles.css';

const NavigationCard = ({cardName}) => {
const history = useHistory();

    const clickHandler = ()=> {
        history.push('/register-meal')
    }

    return (
        <div className='navCard'>
            <span className='navCardTitle' onClick={()=>clickHandler()}>{cardName}</span>
        </div>
    )
}

export default NavigationCard
