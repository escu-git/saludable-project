import React, {useState, useEffect, createContext, useContext} from 'react';
import { getFirebase } from '../firebase';
import { getFirestore } from '../firebase';
export const AuthContext = createContext();
export const useAuth = ()=> useContext(AuthContext);

export const AuthProvider = ({children}) =>{
    const[currentUser, setCurrentUser] = useState("")
    const db = getFirestore();
    const firebase = getFirebase();
    useEffect(()=>{
    firebase.auth().onAuthStateChanged(setCurrentUser) 
    },[])


return<AuthContext.Provider value={{currentUser, setCurrentUser}}>
{children}
</AuthContext.Provider>
}