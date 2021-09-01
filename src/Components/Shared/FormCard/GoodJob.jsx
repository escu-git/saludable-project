import React from 'react'

const GoodJob = ({drink}) => {
    const {id, drinkName, image, ingredients} = drink;
    const ingredientsList = ingredients.filter(x=> x !== null)
        
    return (
        <div className='drinkCard'>
            <span className='drinkName'>{drinkName}</span>
            <img className='drinkImage' src={image} alt={drinkName}/>
            <span>Ingredients</span>
            <ul className='drinkIngredients'>
                {ingredientsList?.map(x=>{
                    return(<li key={id}>{x}</li>)})
                }
            </ul>
        </div>
    )
}

export default GoodJob
