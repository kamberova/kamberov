import { useNavigate } from 'react-router-dom';
import React from "react";
import { useState } from "react";
import { Alert } from 'react-bootstrap';
import { auth } from '../../firebase-config';


import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ setIsAuth }) {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const validatePassword = () => {
        let isValid = true;

        if (email === '' || password === '') {
            isValid = false
            setError('All fields must be filled!');
        };

        return isValid
    };

    const onLoginHandler = async (event) => {
        event.preventDefault();

        if (validatePassword()) {
            // Create a new user with email and password using firebase
            signInWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    // localStorage.setItem("isAuth", true);
                    localStorage.setItem(res.user.email, res.user.uid);
                    setIsAuth(true);
                    console.log(res.user)
                    navigate("/");
                })
                .catch(err => setError(err.message));
        }

        setEmail('')
        setPassword('')

    }

    return (

        <>

            <div className="membership-form">
                <p>Already have an acoount?</p>
                {error && <Alert variant="danger">{error}</Alert>}
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <form onSubmit={onLoginHandler} method="POST" className="membership-form webform" role="form">
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


