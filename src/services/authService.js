/* eslint-disable react-hooks/rules-of-hooks */
// const baseUrl = 'https://kambera-28897-default-rtdb.firebaseio.com';

// export const login = async (email, password) => {
//     let res = await fetch(`${baseUrl}/users/login`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     });

//     let jsonResult = await res.json();

//     if (res.ok) {
//         return jsonResult;
//     } else {
//         throw jsonResult.message;
//     }
// };

// export const register = (email, password) => {
//     return fetch(`${baseUrl}/users/register`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     })
//         .then(res => res.json());
// };

// export const logout = (token) => {
//     return fetch(`${baseUrl}/users/logout`, {
//         headers: {
//             'X-Authorization': token,
//         }
//     })
// };

// export const getUser = () => {
//     let username = localStorage.getItem('user');

//     return username;
// };

// export const isAuthenticated = () => {
//     return Boolean(getUser())
// };


// import { useState } from "react";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from 'firebase/auth';

// const [registerEmail, setRegisterEmail] = useState("");
// const [registerPassword, setRegisterPassword] = useState("");
// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");


// export const register = async () => {
//     try {
//         const user = await createUserWithEmailAndPassword(
//             auth,
//             registerEmail,
//             registerPassword
//         );
//         console.log(user);
//     } catch (error) {
//         console.log(error.message);
//     }
// };


// const login = async () => {

// };

// const logout = async () => {

// };



// import { createContext, useContext, useEffect, useState } from "react";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged
// } from 'firebase/auth';
// import { auth } from '../firebase-config';

// // const [registerEmail, setRegisterEmail] = useState("");
// // const [registerPassword, setRegisterPassword] = useState("");
// // const [loginEmail, setLoginEmail] = useState("");
// // const [loginPassword, setLoginPassword] = useState("");

// // const initialAuthState = {
// //     _id: '',
// //     email: '',
// //     accessToken: '',
// // };

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState("");

//     const register = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const login = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     // const logout = () => {
//     //     setUser(initialAuthState);
//     // };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//         });
//         return () => {
//             unsubscribe();
//         }
//     }, [])

//     return (
//         <AuthContext.Provider value={ }>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuthContext = () => {
//     const authState = useContext(AuthContext);

//     return authState;
// };

