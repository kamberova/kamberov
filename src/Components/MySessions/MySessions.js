import { useState, useEffect } from 'react';

import * as bookService from '../../services/bookService';
import { useAuthContext } from '../../contexts/AuthContext';

import SessionList from '../SessionList/SessionList';

function MySessions() {
 
    const [sessions, setSessions] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        bookService.getMyBooking(user._id)
            .then(sessionsResult => {
                setSessions(sessionsResult);
            });
    }, [sessions, setSessions, user._id])

    return (
        <section href="/my-sessions" className="about section" id="my-sessions">
            <div className="container">
                <div className="row">

                    <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Your Booked Sessions</h2>

                          
                                <SessionList sessions={sessions} />
                       

                    </div>

                    <div className="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
                        <div className="team-thumb">
                            <img src="/images/team/trainer.jpg" className="img-fluid" alt="Trainer" />

                            <div className="team-info d-flex flex-column">

                                <h3>Radoslav Kamberov</h3>
                                <span>Your personal trainer</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}
export default MySessions;

