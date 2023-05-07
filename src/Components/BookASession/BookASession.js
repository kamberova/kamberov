import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import BookNowButton from "../Layout/BookNowButton";
import * as bookService from '../../services/bookService';
import ShowCalendar from "../Calendar/Calendar";


function BookASession() {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    // console.log(year);

    let onBookTraining = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget.value);

        let type = formData.get('type');

        // console.log(calendar.currDate);

        bookService.create({
            type,
            // currDate,
            // currDay,
            // currMonth,
            // year
        }, user.accessToken)

            .then(result => {
                console.log(result);

                navigate('/my-sessions');
            });

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
                            <ShowCalendar />
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