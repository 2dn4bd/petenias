import { createContext, useEffect, useState } from "react";
import auth from '/firebase/firebase.config'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    //social login auth
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, activeUser =>{
            setUser(activeUser)
            console.log(user);
            
            if(activeUser){
                const userInfo = {
                    email: activeUser.email
                }
                setLoading(false)
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access_token', res.data.token)
                    }
                })
            }
            
            else{
                localStorage.removeItem('access_token')
            }
            
        });
        return() =>{
            unSubscribe()
        }
    }, [axiosPublic, user])
    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        updateUserProfile,
        loginWithGoogle,
        loginWithGithub,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;