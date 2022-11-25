import { useNavigate } from 'react-router-dom';

// import * as authService from '../../services/authService';
import * as useAuthContext from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        logout(user)
            .then(() => {
                logout();
                navigate('/');
            })
    }, [logout, navigate, user]);

    return null;
};

export default Logout;

// import { signOut } from 'firebase/auth';
// import { auth } from '../utils/firestore'; // update path to your firestore config

// signOut(auth)
//     .then(() => {
//         console.log('logged out');
//         navigate('/');
//     })
//     .catch((error) => {
//         console.log(error);
//     });