import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as bookService from '../../services/bookService';
import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import useBookingState from '../../hooks/useBookingState';

import { Button } from 'react-bootstrap';
import ConfirmDialog from '../Common/ConfirmDialog';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const { bookingId } = useParams();
    const [book, setBooking] = useBookingState(bookingId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        likeService.getBookingLikes(bookingId)
            .then(likes => {
                setBooking(state => ({...state, likes}))
            })
    }, [bookingId, setBooking]);

    const deleteHandler = (e) => {
        e.preventDefault();

        bookService.destroy(bookingId, user.accessToken)
            .then(() => {
                navigate('/my-sessions');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setShowDeleteDialog(true);
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${book._id}`}>Edit</Link>
            <a href="/" className="button" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const likeButtonClick = () => {
        if (user._id === book._ownerId) {
            return;
        }

        if (book.likes.includes(user._id)) {
            addNotification('You cannot like again')
            return;
        }

        likeService.like(user._id, bookingId)
            .then(() => {
                setBooking(state => ({...state, likes: [...state.likes, user._id]}));

                addNotification('Successfuly liked a training :)', types.success);
            });
    };

    const userButtons = <Button onClick={likeButtonClick} disabled={book.likes?.includes(user._id)}>Like</Button>;

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <section id="details-page" className="details">
                <div className="">
                    <h3>Type: {book.type}</h3>
                    <p className="hour">Hour: {book.hour}</p>
                    <p className="price">Price: {book.price}</p>
                    <div className="">
                        {user._id && (user._id == book._ownerId
                            ? ownerButtons
                            : userButtons
                        )}

                        <div className="likes">
                            <span id="total-likes">Likes: {book.likes?.length || 0}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Details;