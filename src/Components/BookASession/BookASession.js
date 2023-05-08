// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../contexts/AuthContext";
import BookNowButton from "../Layout/BookNowButton";
// import * as bookService from '../../services/bookService';
// import ShowCalendar from "../Calendar/Calendar";
import Calendar from 'react-calendar';
import { useState } from 'react';
import './BookASession.css';



function BookASession() {
    // const { user } = useAuthContext();
    // const navigate = useNavigate();
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
    // console.log(year);

    let onBookTraining = (event) => {
        event.preventDefault();

        // let formData = new FormData(event.currentTarget.value);

        // let type = formData.get('type');

        // console.log(calendar.currDate);

        // bookService.create({
        //     type,
        //     // currDate,
        //     // currDay,
        //     // currMonth,
        //     // year
        // }, user.accessToken)

        //     .then(result => {
        //         console.log(result);

        //         navigate('/my-sessions');
        //     });




    };



    return (

        <section href="/book-a-session" className="schedule section" id="book-a-session">

            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center">
                        <h3 className="text-white" data-aos="fade-up" data-aos-delay="200">Book your session</h3>
                    </div>



                    <div className="col-lg-12 col-md-12 col-12" data-aos="fade-up">
                        <div className="">
                            {/* <Calendar /> */}
                            <div className="calendar">
                                <div className="calendar-container">
                                    <Calendar onChange={setDate} value={date} />
                                </div>
                                <div className="text-center text-white padding">
                                    Selected date: {date.toDateString()}
                                </div>
                            </div>
                            {/* <i className=" fa fa-calendar" data-aos="fade-up" data-aos-delay="200"></i> */}
                        </div>
                        <div className="col-lg-12 col-12 text-center padding">
                            <section id="create-session" className="create padding">
                                <div className="choose-session padding custom-options">
                                    <label htmlFor="formsel" className="text-white padding">Choose session type:</label>
                                    <select id="formsel" className="react-calendar padding text-center">
                                        <option value="personal">Personal training</option>
                                        <option value="team">Team Building</option>
                                        <option value="showcase">Showcase</option>
                                    </select>
                                </div>

                                <div className="choose-session padding custom-options">
                                    <label htmlFor="formsel" className="text-white padding">Preffered hour:</label>
                                    <select id="formsel" className="react-calendar padding text-center">
                                        <option value="10-11">10-11AM</option>
                                        <option value="11-12">11-12AM</option>
                                        <option value="14-15">14-15PM</option>
                                        <option value="15-16">15-16PM</option>
                                        <option value="16-17">16-17PM</option>
                                    </select>
                                </div>

                                <form id="create-form" onClick={onBookTraining} method="POST">
                                    <div>
                                        <strong
                                            id="name"
                                            name="type"
                                            value="type"
                                        //    onClick={(e) => setType(e.target.value)}
                                        >
                                        </strong>
                                    </div>
                                    <BookNowButton />

                                </form>
                            </section>
                        </div>
                    </div >

                </div >
            </div >

        </section >

    );

};
//
export default BookASession;