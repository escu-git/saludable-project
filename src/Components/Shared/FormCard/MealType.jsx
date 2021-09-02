import React, {useState, useEffect} from 'react'
import Dessert from './Dessert'
import EatenFood from './EatenFood'

const MealType = ({fn}) => {
const[mealType, setMealType]=useState(null)
const[dessert, setDessert]=useState(false)
    useEffect(()=>{
        if(mealType == 'Lunch' || mealType == 'Dinner'){
            setDessert(true)
        }else{
            setDessert(false)
        }
    },[mealType])

    return (
    <div>
            <div>
                <label for='Breakfast'>BreakFast</label>
                <input type='radio' id='Breakfast' name='meal' onClick={()=>setMealType('Breakfast')}/>
            </div>
            <div>
                <label for='Lunch'>Lunch</label>
                <input type='radio' id='Lunch' name='meal'onClick={()=>setMealType('Lunch')} />
            </div>
            <div>
                <label for='Snack'>AfterNoon Snack</label>
                <input type='radio' id='Snack' name='meal' onClick={()=>setMealType('Afternoon Snack')} />
            </div>
            <div>
                <label for='Dinner'>Dinner</label>
                <input type='radio' id='Dinner' name='meal' onClick={()=>setMealType('Dinner')}/>
            </div>
            {mealType !== null ? <EatenFood/> : null}
            {dessert ? <Dessert/> : null}
            <button onClick={()=>{fn(mealType)}}>CONTINUE</button>
    </div>
    )
}

export default MealType
