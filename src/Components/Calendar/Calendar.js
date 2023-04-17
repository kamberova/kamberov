import Calendar from 'react-calendar';
import './Calendar.css';
import { useState } from 'react';



function ShowCalendar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState(new Date())



    return (
        <div className="calendar">
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="text-center text-white padding">
                Selected date: {date.toDateString()}
            </div>
        </div>
    )

}

export default ShowCalendar;