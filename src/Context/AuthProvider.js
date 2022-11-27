import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword,signOut, signInWithPopup, deleteUser } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const GoogleSinUp = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const LogIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const deleteUserFromFirebase = (email) => {
        console.log(auth.currentUser);
        return deleteUser(auth, email);
    }

    const userInfo = {
        signUpWithEmail,
        user,
        updateUser,
        LogIn,
        logOut,
        GoogleSinUp,
        deleteUserFromFirebase,

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

        })

        return () => unsubscribe();
    }, [])

    // console.log(user);
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;