// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import React from "react";
import { useState } from "react";
// import { auth } from '../../firebase-config';

import { useAuthContext } from '../../contexts/AuthContext';
// import { useNotificationContext, types } from '../../contexts/NotificationContext';


function Register() {
    const navigate = useNavigate();
    // const { addNotification } = useNotificationContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [repeatPassword, setRepeatPassword] = useState("");
    const { signUp } = useAuthContext();

    const registerSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await signUp(
                email,
                password
            );
            
            navigate('/')
        } catch (error) {
            alert(error.message);

        }

        // let token = document.getElementById('repeatPassword');
       
        // let repeatPassword = token.value;
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

                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <form onSubmit={registerSubmitHandler} method="POST" className="membership-form webform" role="form">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="yourEmailHere"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="yourPassword"
                        required id="password"
                        onChange={(e) => setPassword(e.target.value)}
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