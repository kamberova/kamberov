import React, { Fragment } from "react";
import BookASessionButton from "../Layout/BookASessionButton";
import SessionCard from "./SessionCard";

const SessionList = ({
    sessions
}) => {
    return (
        <>
            {sessions.length > 0
                ? (
                    <ul className="data-aos=fade-up data-aos-delay=400">
                        {sessions.map(x => <SessionCard key={x._id} session={x} />)}
                    </ul>
                )
                : (
                    <ul className="data-aos=fade-up">
                        <p className="no-booked-sessions">You have no booked session!</p>
                        <div className="no-sessions">
                            <strong>To view available sessions:</strong>
                            <BookASessionButton />
                        </div>
                    </ul>
                )
            }
        </>
    );
}

export default SessionList;