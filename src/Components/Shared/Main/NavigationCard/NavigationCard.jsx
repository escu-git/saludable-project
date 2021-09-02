import React,{useState} from 'react'
import { useHistory } from 'react-router';
import '../../../../assets/Styles/styles.css';

const NavigationCard = ({cardName, route}) => {
const history = useHistory();

    const clickHandler = (route)=> {
        history.push(route)
    }

    return (
        <div className='navCard' onClick={()=>clickHandler(route)}>
            <span className='navCardTitle'>{cardName}</span>
        </div>
    )
}

export default NavigationCard
