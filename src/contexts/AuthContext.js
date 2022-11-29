/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [error, setError] = useState("");

    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
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