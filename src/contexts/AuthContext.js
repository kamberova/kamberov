/* eslint-disable react-hooks/exhaustive-deps */

// import React, { useEffect, useState } from "react";
// import db from "../firebase-config";


// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         db.auth().onAuthSTateChanged(setUser);
//     }, []);


//     return (
//         <AuthContext.Provider value={{ user }}>
//             {children}
//         </AuthContext.Provider>
//     );

// };


// import { createContext, useContext } from 'react';

// import useLocalStorage from '../hooks/useLocalStorage';

// const initialAuthState = {
//     _id: '',
//     email: '',
//     accessToken: '',
// };

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useLocalStorage('user', initialAuthState);

//     const login = (authData) => {
//         setUser(authData);
//     }

//     const logout = () => {
//         setUser(initialAuthState);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuthContext = () => {
//     const authState = useContext(AuthContext);

//     return authState;
// }








// import React, { useContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase-config';
// import { useNavigate } from "react-router-dom";
// eslint-disable-next-line

// const [registerEmail, setRegisterEmail] = useState("");
// const [registerPassword, setRegisterPassword] = useState("");
// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");

// const initialAuthState = {
//     _id: '',
//     email: '',
//     accessToken: '',
// };
// import React, { useContext } from "react";

// export const AuthContext = React.createContext();

// export function AuthProvider ({ children }) {
//     let [user, setUser] = useState(null);
//     const navigate = useNavigate()
//     function signUp(email, password) {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     function login(email, password) {

//         return signInWithEmailAndPassword(auth, email, password)
//         .then(() => {
//             navigate('/')
//         })
//         .catch ((err) => {
//             alert(err.message);
//         })
//     }

//     function logout () {
//         return signOut(auth);
//     };


//     useEffect(() => {
//         let unsubscribe = auth.onAuthStateChanged((currentUser) => {
//             setUser(currentUser);
//         });
//         return unsubscribe();

//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, signUp, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export function useAuthContext  () {
//     let authState = useContext(AuthContext);
//     console.log(authState)
//     return authState;
// };
import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [error, setError] = useState("");

    const [currentUser, setCurrentUser] = useState();

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signUp,
        error,
        setError
    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

};