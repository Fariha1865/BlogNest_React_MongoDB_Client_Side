import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase.config";
import PropTypes from 'prop-types';
import useAxiosSecure from "../hooks/UseAxiosSecure";


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const axiosSecure = useAxiosSecure();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            setLoading(false)
            //   console.log(user)
            if(currentUser)     
            {
                // const url = '/jwt';
                
                // axiosSecure.post(url,loggedUser,{withCredentials:true})
                // .then(res=>{
                    
                //         console.log(res.data)
                    
                // })
            }else{
                const url = '/logout'
                axiosSecure.post(url,loggedUser,{withCredentials:true})
                .then(res=>{
                    
                        console.log(res.data)
                    
                })
            }
        });
                                                                                                                                                                                                                                  

        return () => {
            unSubscribe();
        }
    }, [auth, user,axiosSecure])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const signIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createUser,
        setUser,
        logOut,
        signIn,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}   
export default AuthProvider;