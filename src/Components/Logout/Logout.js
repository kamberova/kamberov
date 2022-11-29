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
