// import { signOut } from 'firebase/auth';
// import { auth } from '../../firebase-config'; // update path to your firestore config
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {

    const navigate = useNavigate();

    // signOut(auth)
    //     .then(() => {
    //         navigate('/');

    //         console.log('logged out');
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    const auth = getAuth();

    signOut(auth).then(() => {
        alert('You have successfully logged out!');
        navigate('/');
    }).catch((error) => {
        console.log(error.message)
    });
    return null;
}
// }

export default Logout;
