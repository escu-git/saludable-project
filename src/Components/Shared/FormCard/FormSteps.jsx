import React,{useState, useEffect} from 'react'
import '../../../assets/Styles/styles.css';
const FormSteps ={
    Welcome00: () => {
        return (
            <div>
                WELCOME!
            </div>
        )
    },
    MealType01:()=>{
        return(
            <div>
                MealType
            </div>
        )
    },
    EatenFood02:()=>{
        return(
            <div>
                EATEN FOOD:
                <form>
                <label for='primaryFood'>PRIMARY FOOD</label>
                <input type='text' id='primaryFood'/>
                <label for='secondaryFood'>SECONDARY FOOD</label>
                <input type='text' id='secondaryFood'/>
                <label for='beverage'>DRINKED BEVERAGE</label>
                <input type='text' id='beverage'/>
                </form>
            </div>
        )
    },
    Dessert03: ()=>{
        return(
            <div>
            <form>
                <label for='eatDessert'></label>
                <input type='radius' id='eatDessert'/>
            </form>
            </div>
        )
    },
    TemptedFood04:()=>{
        return(
            <div>
                <form>
                    YES - NO
                </form>
            </div>
        )
    },
    StillHungry05:()=>{
        return(
            <div>
                YES - NO
            </div>
        )
    },
    GoodJob06:(drink)=>{
        const {id, drinkName, image, ingredients} = drink;
        const ingredientsList = ingredients.filter(x=> x !== null)
        console.log(drink)
        return(
            <div className='drinkCard'>
                <span className='drinkName'>{drinkName}</span>
                <img className='drinkImage' src={image} alt={drinkName}/>
                <span>Ingredients</span>
                <ul className='drinkIngredients'>
                {ingredientsList?.map(x=>{return(<li key={id}>{x}</li>)})}
                </ul>
            </div>
        )
    }


}

export default FormSteps;
