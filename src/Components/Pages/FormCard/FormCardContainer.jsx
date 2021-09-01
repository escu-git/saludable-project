import React, {useState, useEffect} from 'react'
import FormCard from './FormCard';
import { useMealLogger } from '../../../Contexts/mealLogContext';
import Welcome from '../../Shared/FormCard/Welcome';
import MealType from '../../Shared/FormCard/MealType';
import EatenFood from '../../Shared/FormCard/EatenFood';
import Dessert from '../../Shared/FormCard/Dessert';
import TemptedFood from '../../Shared/FormCard/TemptedFood';
import StillHungry from '../../Shared/FormCard/StillHungry';
import GoodJob from '../../Shared/FormCard/GoodJob';

const FormCardContainer = () => {
    const useMealLog = useMealLogger(null);
    const[customTag, setCustomTag]=useState(null);
    const[mealType, setMealType]=useState(null);

    const clickNextHandler = ()=>{
        useMealLog.setStep(useMealLog.step+1)
    }
    const clickPrevHandler = ()=>{
        useMealLog.setStep(useMealLog.step-1)
    }

    const selectedMeal = (x) =>{
        setMealType(x)
    }

    useEffect(async()=>{
        switch(useMealLog.step){
            case 0:
                setCustomTag(<Welcome/>)
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
    },[useMealLog.step])

    return (
        <div className='formCardContainer'>
            <FormCard next={clickNextHandler} back={clickPrevHandler}>
                {customTag}
            </FormCard>
        </div>
    )
}

export default FormCardContainer