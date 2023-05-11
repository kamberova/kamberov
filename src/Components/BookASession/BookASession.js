import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../contexts/AuthContext";
import BookNowButton from "../Layout/BookNowButton";
// import * as bookService from '../../services/bookService';
// import ShowCalendar from "../Calendar/Calendar";
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import './BookASession.css';
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";



function BookASession() {
    // const { user } = useAuthContext();
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState("");
    console.log(type);

    const SessionsRef = collection(db, "sessions");
    const [sessions, setSessions] = useState([]);
    console.log(sessions);

    useEffect(() => {
        const getSession = async () => {
            const data = await getDocs(SessionsRef);
            setSessions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getSession();


    }, [SessionsRef]);


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
    let selectedDate = date.getDate();
    let selectedDay = weekDays[day];
    let selectedMonth = months[month];


    console.log(year, selectedDate, selectedDay, selectedMonth);


    let onBookTraining = (event) => {
        event.preventDefault();

        let selectedType = document.getElementById('type');
        let type = selectedType.options[selectedType.selectedIndex].text;
        let select = document.getElementById('hour');
        let hour = select.options[select.selectedIndex].text;

        console.log(type);
        console.log(hour);



        // const usersCollectionRef = collection(db, 'users')

        // const addSession = async () => {
        //     const document = await addDoc(usersCollectionRef, {
        //         type,
        //         selectedDate,
        //         selectedDay,
        //         selectedMonth,
        //         year,
        //         hour
        //     })

        //     const newCollectionRef = collection(db, 'users', document.id, 'mySession')

        //     await addDoc(newCollectionRef, {
        //         data: 'Hello there World',
        //     })
        // }

        // bookService.create({
        //     type,
        //     selectedDate,
        //     currDay,
        //     currMonth,
        //     year,
        //     hour
        // }, user.accessToken)

        //     .then(result => {
        //         console.log(result);

        //     });


        navigate('/my-sessions');


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
                                    <select id="type" className="react-calendar padding text-center">
                                        <option onClick={(event) => setType(event.target.value)} id="personal" value="personal">Personal training</option>
                                        <option onClick={onBookTraining} id="team" value="team">Team Building</option>
                                        <option onClick={onBookTraining} id="showcase" value="showcase">Showcase</option>
                                    </select>
                                </div>

                                <div className="choose-session padding custom-options">
                                    <label htmlFor="formsel" className="text-white padding">Preffered hour:</label>
                                    <select id="hour" className="react-calendar padding text-center">
                                        <option onClick={onBookTraining} value="10-11">10-11AM</option>
                                        <option onClick={onBookTraining} value="11-12">11-12AM</option>
                                        <option onClick={onBookTraining} value="14-15">14-15PM</option>
                                        <option onClick={onBookTraining} value="15-16">15-16PM</option>
                                        <option onClick={onBookTraining} value="16-17">16-17PM</option>
                                    </select>
                                </div>

                                <form id="create-form" onClick={onBookTraining} method="POST">
                                    <div>
                                        <strong
                                            id="name"
                                            name="type"
                                            value="type"
                                            onClick={(e) => setType(e.target.value)}
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