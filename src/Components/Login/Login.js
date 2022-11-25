// import { useNavigate } from 'react-router-dom';


// import { useAuthContext } from '../../contexts/AuthContext';
// import { useNotificationContext, types } from '../../contexts/NotificationContext';

// import * as authService from '../../services/authService';

// function Login() {
//     const { login } = useAuthContext();
//     const { addNotification } = useNotificationContext();
//     const navigate = useNavigate();

//     const onLoginHandler = (e) => {
//         e.preventDefault();

//         let formData = new FormData(e.currentTarget);

//         let email = formData.get('email');
//         let password = formData.get('password');

//         if (password == '' || email == '') {
//             alert('All fields must be filled!');
//         };

//         console.log(email, password);

//         authService.login(email, password)
//             .then((authData) => {
//                 login(authData);
//                 navigate('/');
//                 addNotification('You are logged in successfully', types.success);
//             })
//             .catch(err => {
//                 alert(err);
//                 console.log(err);
//             });

//     }

//     return (

//         <>

//             <div className="membership-form">
//                 <p>Already have an acoount?</p>
//                 {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
//                 <form onSubmit={onLoginHandler} method="POST" className="login-form webform" role="form">
//                     <label htmlFor="email">E-mail</label>
//                     <input type="email" className="form-control" name="email" placeholder="yourEmail" id="email" />

//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" name="password" placeholder="yourPassword" id="password" />

//                     <button type="submit" className="form-control" id="submit-button" name="submit">Login</button>

//                 </form>

//             </div>
//         </>

//     )

// }

// export default Login;


// eslint-disable-next-line

import React, { useState } from 'react';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


const Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const onLoginHandler = async (e) => {
        e.preventDefault();

        if (password === '' || email === '') {
            setError('All fields must be filled!');
            return;
        };

        try {

            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);

            navigate('/');
        } catch (err) {
           
            console.log(err.message);
            // ..
        };

    }

    return (

        <>

            <div className="membership-form">
                <p>Already have an acoount?</p>
                {error && <Alert variant="danger">{error}</Alert>}
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <form onSubmit={onLoginHandler} method="POST" className="login-form webform" role="form">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email" placeholder="yourEmail"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="yourPassword"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="form-control" id="submit-button" name="submit">Login</button>

                </form>

            </div>
        </>

    )


}

export default Login;


