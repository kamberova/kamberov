import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import BookNowButton from "../Layout/BookNowButton";
import * as bookService from '../../services/bookService';
import ShowCalendar from "../Calendar/Calendar";

function BookASession() {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    let onBookTraining = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget.value);

        let type = formData.get('type');
        let hour = formData.get('hour');
        let price = formData.get('price');

        console.log(type, hour, price);

        bookService.create({
            type,
            hour,
            price
        }, user.accessToken)
            .then(result => {
                navigate('/my-sessions');
                // console.log(result);
            });

    };



    return (

        <section href="/book-a-session" className="schedule section" id="book-a-session">

            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center">
                        <h3 className="text-white" data-aos="fade-up" data-aos-delay="200">Book your session</h3>
                    </div>



                    <div className="col-lg-12 py-5 col-md-12 col-12" data-aos="fade-up">
                        <div className="">
                            <ShowCalendar />
                            {/* <i className=" fa fa-calendar" data-aos="fade-up" data-aos-delay="200"></i> */}
                        </div>
                        <div className="col-lg-12 col-12 text-center padding">
                            <section id="create-session" className="create padding">
                                <div className="choose-session padding custom-options">
                                    <label htmlFor="formsel" className="text-white padding">Choose your session:</label>
                                    <select id="formsel" className="react-calendar padding">
                                        <option value="personal">Personal training</option>
                                        <option value="team">Team Building</option>
                                        <option value="showcase">Showcase</option>
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
                                        <span
                                            id="hour"
                                            name="hour"
                                            value="hour"
                                        // onClick={(e) => setHour(e.target.value)}
                                        >

                                        </span>
                                        <span
                                            id="price"
                                            name="price"
                                            value="price"
                                        >
                                            {/* onClick={(e) => setPrice(e.target.value)}  */}

                                        </span>
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