// import { signOut } from 'firebase/auth';
// import { auth } from '../../firebase-config'; // update path to your firestore config
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { useAuthContext } from "../../contexts/AuthContext";
// import React from "react";

const Logout = () => {

    const { user } = useAuthContext();

    const navigate = useNavigate();

    const auth = getAuth();
    useEffect(() => {
        signOut(auth).then(() => {
            localStorage.clear();
            // setIsAuth(false);
            alert('Successfully logged out!')
        }).catch((error) => {
            console.log(error.message)
        });

        if (!user) { 
            navigate("/"); 
        }
    }, [auth, user, navigate]);

    return null;
}
// }

export default Logout;
