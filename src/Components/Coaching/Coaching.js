import BookASessionButton from "../Layout/BookASessionButton";


function Coaching() {

    return (

        <section className="class section" id="coaching">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-5">
                        <h2 data-aos="fade-up" data-aos-delay="200">Our Training Classes</h2>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
                        <div className="class-thumb">
                            <img src="/images/team/team-image.jpg" className="img-fluid" alt="Class" />

                            <div className="class-info">
                                <h3 className="mb-1">Personal Training</h3>

                                <span><strong>Trained by </strong>Radoslav Kamberov</span>

                                <span className="class-price moving-price">$50</span>

                                <p className="mt-3">You can book a training upon your needs: personal beginners or advanced training, group training, kids training, or just a sparing partner.</p>


                                <BookASessionButton />

                            </div>

                        </div>
                    </div>

                    <div className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
                        <div className="class-thumb">
                            <img src="/images/class/table-tennis-team.jpg" className="img-fluid" alt="Class" />

                            <div className="class-info">
                                <h3 className="mb-1">Team Building</h3>

                                <span><strong>Trained by </strong>our Table Tennis Team</span>

                                <span className="class-price moving-price">$66</span>

                                <p className="mt-3">Upon a request our team manage and lead team buildings for companies/firms.</p>

                                <BookASessionButton />

                            </div>
                        </div>
                    </div>

                    <div className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                        <div className="class-thumb">
                            <img src="/images/class/table-tennis-showcase.jpg" className="img-fluid" alt="Class" />

                            <div className="class-info">
                                <h3 className="mb-1">Showcase</h3>

                                <span><strong>Trained by</strong> Radoslav Kamberov</span>

                                <span className="class-price moving-price">$75</span>

                                <p className="mt-3">Two times a week we organise a showcase tournament that you can visit. Be a part of a show performed by top table tennis players in London. Check on the next date on the poster.*</p>

                                <BookASessionButton />
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Coaching;