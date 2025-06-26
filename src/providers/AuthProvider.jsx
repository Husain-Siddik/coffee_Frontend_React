
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)


    const createuser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)


    }

    const singInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser => {

        if (currentUser) {
            console.log('i have user');
            //console.log(currentUser);
            setUser(currentUser)

        }
        else {
            //console.log('no user logged in ');
            setUser(null)

        }

    }))


    return () =>{
        //cleanup Funtion 
        unsubcribe()
    }

    },[])

    


    return (
        <AuthContext.Provider value={{ createuser, singInUser ,user,logOutUser}} >

            {children}

        </AuthContext.Provider >
    );
};

export default AuthProvider;