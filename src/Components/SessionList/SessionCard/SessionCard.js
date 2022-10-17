import { Link } from 'react-router-dom';

const SessionCard = (
    bookSession ) => {
    return (
        <li className="">
            <p>Type: {bookSession.type}</p>
            <Link className="button" to={`/details/${bookSession._id}`}>Details</Link>
        </li>
    );
}

export default SessionCard;