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








import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
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

export const AuthContext = createContext();

export function AuthProvider ({ children }) {
    let [user, setUser] = useState(null);
  
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout () {
        return signOut(auth);
    };

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe();

    }, []);

    return (
        <AuthContext.Provider value={{ user, signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuthContext  () {
    let authState = useContext(AuthContext);
    console.log(authState)
    return authState;
};