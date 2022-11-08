import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext()

const UserContext =({children})=>{
    const auth = getAuth(app) ;
    const [user , setUser] = useState({}) ;
    const [loading , setLoading] = useState(true) ;

    const createUser =(email,password)=>{
        //setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }


    
const authInfo= {user , createUser} ;
return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
);

};

export default UserContext;