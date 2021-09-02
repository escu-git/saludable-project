import React, {useState, useEffect, createContext, useContext} from 'react';
import { getFirebase } from '../firebase';
import { getFirestore } from '../firebase';
export const AuthContext = createContext();
export const useAuth = ()=> useContext(AuthContext);

export const AuthProvider = ({children}) =>{
    const[currentUser, setCurrentUser] = useState("")
    const db = getFirestore();
    const firebase = getFirebase();

    const handleLogOut = () =>{

        firebase.auth().signOut().then(() => {
            console.log('Logged out succesfully')
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(()=>{
    firebase.auth().onAuthStateChanged(setCurrentUser) 
    },[])

    currentUser && console.log(`Logged account: ${firebase.auth().currentUser.email}`)

return<AuthContext.Provider value={{currentUser, setCurrentUser, handleLogOut}}>
{children}
</AuthContext.Provider>
}