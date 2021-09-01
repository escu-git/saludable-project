import React from 'react'

const MealType = () => {
    const clickHandler=()=>{

    }
    return (
    <div>
        <form className='radioInput'>
            <div>
                <label for='Breakfast'>BreakFast</label>
                <input type='radio' id='Breakfast' name='meal'/>
            </div>
            <div>
                <label for='Lunch'>Lunch</label>
                <input type='radio' id='Lunch' name='meal' />
            </div>
            <div>
                <label for='Snack'>AfterNoon Snack</label>
                <input type='radio' id='Snack' name='meal' />
            </div>
            <div>
                <label for='Dinner'>Dinner</label>
                <input type='radio' id='Dinner' name='meal'/>
            </div>
            <button onClick={()=>{}}></button>
        </form>
    </div>
    )
}

export default MealType
