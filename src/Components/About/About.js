import { Fragment } from "react";
import React from 'react';
// import BookASessionButton from "../Layout/BookASessionButton";


function About() {

    // let trophy = `<i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11"}}></i>`;

    return (
        <Fragment>
            <section href="/about" className="about-section d-flex flex-column justify-content-end" id="about">
                <div className="container">
                    <div className="row">

                        <div className="video-wrapper">
                            <video className="about-video" controls playsInline loop autoPlay muted>
                                <source src="/images/kamberov.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="ml-lg-auto col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="team-thumb">
                                <div className="team-info d-flex flex-column">

                                    <h3>Radoslav Kamberov</h3>
                                    <span>Sertified personal trainer, kids trainer, sparing partner.</span>
                                    <span>I manage also table-tennis team buildings and showcases on firm/company requests.</span>

                                    <ul className="social-icon mt-3">

                                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                        <li><a href="https://www.facebook.com/kamberov" className="fa fa-facebook"></a></li>
                                        {/* <li><a href="#" className="fa fa-twitter"></a></li>
                                    <li><a href="#" className="fa fa-instagram"></a></li> */}
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="ml-lg-auto col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="team-thumb">
                                <div className="team-info d-flex flex-column">

                                    <div>
                                        <h3>Professional experience</h3>

                                        <span className="experience"> <i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11" }}></i>3d place single London GP,Jersey GP</span>
                                        <span className="experience"> <i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11" }}></i>Mens Double winner London GP</span>
                                        <span className="experience"> <i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11" }}></i>Bulgarian national champion</span>
                                        <span className="experience"> <i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11" }}></i>Bulgarian double champion</span>
                                        <span className="experience"> <i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11" }}></i>Bronze medal Balkan games</span>
                                        <span className="experience"> <i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11" }}></i>Runner up International table tennis Festival Albena</span>
                                        <span className="experience"> <i class="fa fa-trophy" style={{ "font-size": "14px", color: "#f13a11" }}></i>Former player Ochsenhausen(Germany), Cestas(France)</span>
                                    </div>

                                    <ul className="social-icon mt-3">

                                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                        <li><a href="https://www.facebook.com/kamberov" className="fa fa-facebook"></a></li>

                                        {/* <li><a href="#" className="fa fa-twitter"></a></li>
<li><a href="#" className="fa fa-instagram"></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <BookASessionButton /> */}

        </Fragment >
    )
}

export default About;