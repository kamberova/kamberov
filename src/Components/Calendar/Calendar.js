import Calendar from 'react-calendar';
import './Calendar.css';
import { useState } from 'react';



function ShowCalendar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState(new Date())

    const weekDays = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currDate = date.getDate();
    let currDay = weekDays[day];
    let currMonth = months[month];

    console.log(year, currDate, currDay, currMonth);

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

