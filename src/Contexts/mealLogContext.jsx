import React, {createContext, useContext, useState, useEffect} from 'react';
export const MealLoggerContext = createContext();
export const useMealLogger = () => useContext(MealLoggerContext);

export const MealLoggerProvider = ({children})=>{
    const[mealType, setMealType]=useState(null)
    const[step, setStep]=useState(0)
    
    const loggedMeal = {
    }

    
    return(
        <MealLoggerContext.Provider value={{
            mealType, setMealType, setStep, step}}>
            {children}
        </MealLoggerContext.Provider>
    )
}
