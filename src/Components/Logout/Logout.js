
// // import * as authService from '../../services/authService';
// import * as useAuthContext from '../../contexts/AuthContext';
// import { useEffect } from 'react';

// const Logout = () => {
//     const navigate = useNavigate();
//     const { user, logout } = useAuthContext();

//     useEffect(() => {
//         logout(user)
//             .then(() => {
//                 logout();
//                 navigate('/');
//             })
//     }, [logout, navigate, user]);

//     return null;
// };

// export default Logout;
// import React from 'react';
// import app from '../../firebase-config'
// import { auth } from '../../firebase-config';

// import { useNavigate } from 'react-router-dom';


// const Logout = () => {

//     let navigate = useNavigate();

//     auth().signOut().then(() => {
//         navigate('/');
//     }).catch((error) => {
//         console.error(error)
//     })


import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config'; // update path to your firestore config
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    signOut(auth)
        .then(() => {
            console.log('logged out');
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
    return null;
}
// }

export default Logout;
