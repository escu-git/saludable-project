import React from 'react'

const EatenFood = () => {
    return (
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
}

export default EatenFood
