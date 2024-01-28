// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { useAuthContext } from '../../contexts/AuthContext';
// import { db } from '../../firebase-config';
// import BookASessionButton from "../Layout/BookASessionButton";

// function MySessions() {

//     const [sessions, setSessions] = useState([]);
//     const { user } = useAuthContext();

//     useEffect(() => {
//         getMySessions();
//     }, []);

//     useEffect(() => {
//         console.log(sessions)
//     }, [sessions, setSessions, user._id])

//     function getMySessions() {
//         const sessionsCollRef = collection(db, 'sessions');
//         getDocs(sessionsCollRef)
//             .then(response => {
//                 const allSessions = response.docs.map(doc => ({
//                     data: doc.data(),
//                     id: doc.id,
//                     // user: user.id
//                 }))
//                 setSessions(allSessions)
//             })
//             .catch(error => {
//                 console.log(error.message);
//             })
//         // .then(sessionsResult => {
//         //     setSessions(sessionsResult);
//     };
//     return (
//         <section href="/my-sessions" className="about section" id="my-sessions">
//             <div className="container">
//                 <div className="row">

//                     <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
//                         <h2 className="mb-4">Your Booked Sessions</h2>


//                         {/* <SessionList sessions={sessions} /> */}

//                         {sessions.length > 0
//                             ? (
//                                 <ul >
//                                     {sessions.map(session => (
//                                         <li className="team-info" key={session.id}><strong>{session.data.type}</strong> booked for {session.data.year} {session.data.selectedMonth} {session.data.selectedDate} - {session.data.selectedDay} at {session.data.hour}</li>
//                                     ))}
//                                 </ul>
//                             )
//                             : (
//                                 <ul className="data-aos=fade-up">
//                                     <p className="no-booked-sessions">You have no booked sessions yet!</p>
//                                     <div className="no-sessions">
//                                         <strong>Check out my available sessions:</strong>
//                                         <BookASessionButton />
//                                     </div>
//                                 </ul>
//                             )
//                         }
//                     </div>

//                     <div className="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
//                         <div className="team-thumb">
//                             <img src="/images/team/trainer.jpg" className="img-fluid" alt="Trainer" />

//                             <div className="team-info d-flex flex-column">

//                                 <h3>Radoslav Kamberov</h3>
//                                 <span>Your personal trainer</span>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );

// }
// export default MySessions;

