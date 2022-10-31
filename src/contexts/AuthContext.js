
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
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
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

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const auth = getAuth();
    function signUp(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(auth, email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const logout = () => {
    //     setUser(initialAuthState);
    // };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe();

    }, [auth])

    return (
        <AuthContext.Provider value={{ user, signUp, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};