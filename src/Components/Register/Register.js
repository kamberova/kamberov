/* eslint-disable no-undef */
// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import React from "react";
import { useState } from "react";
// import { Alert } from 'react-bootstrap';
// import { auth } from '../../firebase-config';

// import { useAuthContext } from '../../contexts/AuthContext';
// import { useNotificationContext, types } from '../../contexts/NotificationContext';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
    const navigate = useNavigate();
    // // const { addNotification } = useNotificationContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    // // const [repeatPassword, setRepeatPassword] = useState("");
    // const { signUp } = useAuthContext();


    const registerSubmitHandler = async (e) => {
        e.preventDefault();

        

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              let  user = userCredential.user;
                navigate('/');
            })
            .catch((error) => {

                console.log(error.message);
                // ..
            });
        // setError("");

        // try {
        //     await signUp(
        //         email,
        //         password,
        //         // repeatPassword
        //     );

        //     navigate('/')
        // } catch (error) {
        //     setError(error.message);

        // }

        console.log(user)
        // let token = document.getElementById('repeatPassword');

        // let repeatPassword = token.target.value;
        // console.log(repeatPassword)

        // if(repeatPassword !== password) {
        //     throw new Error('Password and repeat password must be the same!')
        // };

    };

    // if (password === '' || email === '' || repeatPassword === '') {
    //     alert('All fields must be filled!');
    // }

    return (
        <>
            <div className="membership-form">

                <p>Are you a new member to my page?</p>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <form onSubmit={registerSubmitHandler} method="POST" className="membership-form webform" role="form">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="yourEmailHere"
                        id="email"
                        onChange={(e) => setEmail(user.email)}
                    />

                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="yourPassword"
                        required id="password"
                        onChange={(e) => setPassword(user.password)}
                    />

                    <label htmlFor="repeatPassword">Repeat Password</label>

                    <input
                        type="password"

                        className="form-control"
                        name="repeatPassword"
                        placeholder="repeatPassword"
                        required id="repeatPassword"
                    // onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <button type="submit" className="form-control" id="submit-button" name="submit">Create an Account</button>
                </form>

            </div>
        </>

    )

}



export default Register;