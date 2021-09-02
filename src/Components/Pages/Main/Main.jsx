import React from 'react'
import NavigationCard from '../../Shared/Main/NavigationCard/NavigationCard';
import '../../../assets/Styles/styles.css';

const Main = () => {
    return (
        <div className='mainContainer'>
           <NavigationCard cardName='Register new meal' route='/register-meal'/>
           <NavigationCard cardName='Meal history' route='/meal-history'/>
        </div>
    )
}

export default Main
