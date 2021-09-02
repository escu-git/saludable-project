import React, {useState, useEffect} from 'react';
import FormCard from './FormCard';
import Welcome from '../../Shared/FormCard/Welcome';
import MealType from '../../Shared/FormCard/MealType';
import EatenFood from '../../Shared/FormCard/EatenFood';
import Dessert from '../../Shared/FormCard/Dessert';
import TemptedFood from '../../Shared/FormCard/TemptedFood';
import StillHungry from '../../Shared/FormCard/StillHungry';
import GoodJob from '../../Shared/FormCard/GoodJob';
import firebase from 'firebase/app';
import { getFirestore } from '../../../firebase';

const FormCardContainer = () => {
    const[step, setStep]=useState(0);
    const[customTag, setCustomTag]=useState(null)
    const INITIAL_STATE = {
        user:{
            name:null,
            personId:12345,
            surname:null,
            username:null
        },
        mealType: 'breakfast',
        primaryFood:'Tostadas',
        secondaryFood:'Queso',
        beverage:'café',
        isDessert:false,
        dessert:null,
        temptation:false,
        temptationFood:null,
        isSatiated:true,
        date:null
    }
    const[newMeal, setNewMeal]=useState(INITIAL_STATE);
    const db = getFirestore();
    const mealsCollection = db.collection('Meals');


    const registerNewMeal = ()=>{
        mealsCollection.add(newMeal).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
    }
    const checkStateIsOk= (stateToCheck) =>{
        if(stateToCheck != null || undefined){
            setStep(step+1)
        }

    }

    const modifyState = (stateToChange, selection) =>{
        stateToChange(selection)
    }

    useEffect(async()=>{
        switch(step){
            case 0:
                setCustomTag(<Welcome fn={registerNewMeal}/>)
                break
            case 1:
                setCustomTag(<MealType/>)
                break
            case 2:
                setCustomTag(<EatenFood/>)
                break
            case 3:
                setCustomTag(<Dessert/>)
                break
            case 4:
                setCustomTag(<TemptedFood/>)
                break
            case 5:
                setCustomTag(<StillHungry/>)
                break
            case 6:
                fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                .then(res=>res.json())
                .then(res=>{
                    let list = Object.entries(res.drinks[0])
                    .filter(([x])=>x.startsWith('strIngredient'))
                    .map(([,v])=>v)
                    let drink = {
                        id:res.drinks[0].idDrink,
                        image:res.drinks[0].strDrinkThumb,
                        drinkName:res.drinks[0].strDrink,
                        ingredients: list
                    }
                    setCustomTag(<GoodJob drink={drink}/>)
                })
        }
    },[step])

    return (
        <div className='formCardContainer'>
            <FormCard>
                {customTag}
            </FormCard>
        </div>
    )
}

export default FormCardContainer