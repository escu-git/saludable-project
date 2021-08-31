import React, {useState, useEffect} from 'react'
import FormCard from './FormCard';
import FormSteps from '../../Shared/FormCard/FormSteps';
import { useMealLogger } from '../../../Contexts/mealLogContext';

const FormCardContainer = () => {
    const useLogger = useMealLogger();
    const[step, setStep]=useState(6)
    const[customTag, setCustomTag]=useState(null);
    const[mealType, setMealType]=useState(null);
    
    useEffect(async()=>{
        switch(step){
            case 0:
                setCustomTag(FormSteps.Welcome00)
                break
            case 1:
                setCustomTag(FormSteps.MealType01)
                break
            case 2:
                setCustomTag(FormSteps.EatenFood02)
                break
            case 3:
                setCustomTag(FormSteps.Dessert03)
                break
            case 4:
                setCustomTag(FormSteps.TemptedFood04)
                break
            case 5:
                setCustomTag(FormSteps.StillHungry05)
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
                    setCustomTag(FormSteps.GoodJob06(drink))
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