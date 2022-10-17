import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

function Register() {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password, repeatPassword } = Object.fromEntries(new FormData(e.currentTarget));
        console.log(email, password)

        if (password === '' || email === '' || repeatPassword === '') {
            alert('All fields must be filled!');
        }

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            });
    }
    return (
        <>
            <div className="membership-form">

                <p>Are you a new member to my page?</p>

                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <form onSubmit={registerSubmitHandler} method="POST" className="membership-form webform" role="form">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" className="form-control" name="email" placeholder="yourEmailHere" id="email" />

                    <label htmlFor="password">Password</label>

                    <input type="password" className="form-control" name="password" placeholder="yourPassword" required id="password" />

                    <label htmlFor="repeatPassword">Repeat Password</label>

                    <input type="password" className="form-control" name="repeatPassword" placeholder="repeatPassword" required id="repeatPassword" />
                    <button type="submit" className="form-control" id="submit-button" name="submit">Create an Account</button>
                </form>

            </div>
        </>

    )

}

export default Register;