import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext()

const UserContext =({children})=>{
    const auth = getAuth(app) ;
    const [user , setUser] = useState({}) ;
    const [loading , setLoading] = useState(true) ;

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth) ;
    }
    const google=(provider) =>{
        setLoading(true)
        
        return signInWithPopup(auth , provider) ;
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth , currentUser=>{
            setUser(currentUser) ;
            setLoading(false) ;
          
        })
        return ()=>{
            unsubscribe()
        }

    },[])

const authInfo= {user ,google, createUser,logOut,login} ;
return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
);

};

export default UserContext;