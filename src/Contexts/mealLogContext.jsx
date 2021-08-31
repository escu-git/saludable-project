import React, {createContext, useContext, useState, useEffect} from 'react';
export const MealLoggerContext = createContext();
export const useMealLogger = () => useContext(MealLoggerContext);

export const MealLoggerProvider = ({children})=>{
    const[mealType, setMealType]=useState(null)
    const loggedMeal = {
    }

    
    return(
        <MealLoggerContext.Provider value={{
            mealType, setMealType}}>
            {children}
        </MealLoggerContext.Provider>
    )
}
