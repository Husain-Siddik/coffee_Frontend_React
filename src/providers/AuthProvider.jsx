
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    const createuser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)


    }

    const singInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser => {

            if (currentUser) {
                console.log('i have user');
                //console.log(currentUser);
                setUser(currentUser)
                const userdata = { email: currentUser.email }

                //jwt token 
                // axios.post('http://localhost:5000/jwt',userdata,
                //     {
                //        withCredentials:true
                //     }

                // )
                // .then( res =>{
                //     console.log('token after jwt',res.data);

                // })
                // .catch( error =>{
                //     console.log( 'jwt er jamela ', error);

                // })
                axios.post('http://localhost:5000/jwt', userdata,
                    {
                        withCredentials: true
                    }
                )
                    .then(res => {
                        console.log(res.data);

                    })
                    .catch(error => {
                        console.log('error massage from JWT', error);

                    })


            }
            else {
                //console.log('no user logged in ');
                setUser(null)

            }

        }))


        return () => {
            //cleanup Funtion 
            unsubcribe()
        }

    }, [])




    return (
        <AuthContext.Provider value={{ createuser, singInUser, user, logOutUser }} >

            {children}

        </AuthContext.Provider >
    );
};

export default AuthProvider;