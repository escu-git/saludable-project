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
const FormCardContainer = () => {
    const[step, setStep]=useState(0);
    const[customTag, setCustomTag]=useState(null)
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

    const createNewMeal = () =>{

    }
    const checkAndContinue = (checkValue) =>{
        if(checkValue == null){
            console.log('Please, choose option to continue.')
            return
        }else{
            setStep(step+1)
        }
    }

    useEffect(async()=>{
        switch(step){
            case 0:
                setCustomTag(<Welcome fn={checkAndContinue}/>)
                break
            case 1:
                setCustomTag(<MealType fn={checkAndContinue}/>)
                break
            case 2:
                setCustomTag(<TemptedFood/>)
                break
            case 3:
                setCustomTag(<StillHungry/>)
                break
            case 4:
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
                break
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