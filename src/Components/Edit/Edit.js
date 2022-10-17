// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import * as bookService from '../../services/bookService';
// import useBookingState from '../../hooks/useBookingState';
// import { Alert } from 'react-bootstrap';

// const types = [
//     { value: 'type', text: 'Type' },
//     { value: 'hour', text: 'Hour' },
//     { value: 'price', text: 'Price' },
// ]

// const Edit = () => {
//     const { bookingId } = useParams();
//     const [errors, setErrors] = useState({type: false})
//     const [book, setBooking] = useBookingState(bookingId);

//     const bookingEditSubmitHandler = (e) => {
//         e.preventDefault();

//         let bookData = Object.fromEntries(new FormData(e.currentTarget))

//         bookService.update(book._id, bookData);
//     }

//     const hourChangeHandler = (e) => {
//         let currentSession = e.target.value;
//         if (currentSession.length < 0) {
//             setErrors(state => ({...state, session: 'Your have no sessions added!'}))
//         } else {
//             setErrors(state => ({...state, session: false}))
//         }
//     };

//     return (
//         <section id="edit-page" className="">
//             <form id="edit-form" method="POST" onSubmit={bookingEditSubmitHandler}>
//                 <fieldset>
//                     <legend>Edit my session</legend>
                    
//                     <input className="button submit" type="submit" value="Save" />
//                 </fieldset>
//             </form>
//         </section>
//     );
// }

// export default Edit;