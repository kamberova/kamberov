import React from "react";

function Contacts() {

  return (

    <section href="/contacts" className="contact section" id="contact">
      <div className="container">
        <div className="row">

          <div className="ml-auto col-lg-5 col-md-6 col-12">
            <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="50">Feel free to contact me</h2>

            <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12" data-aos="fade-up" data-aos-delay="100">
              <p className="mr-4">
                <i className="fa fa-envelope-o mr-1"></i>
                <a href="/contacts">kambera@abv.bg</a>
              </p>
            </div>


            <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12" data-aos="fade-up" data-aos-delay="100">
              <p><i className="fa fa-phone mr-1"></i>
                <a href="/contacts">+359 888 92 16 92</a>
              </p>
            </div>

            <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12" data-aos="fade-up" data-aos-delay="100">
              <p><i className="fa fa-facebook mr-1"></i>
                <a href="https://www.facebook.com/kamberov">Facebook page</a>
              </p>
            </div>

          </div>

          <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
            <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">Where you can find me</h2>

            <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i> 2, Stockholm Rd, London SE16 3LP, UK</p>

            <div className="google-map" data-aos="fade-up" data-aos-delay="900">
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39764.79482105121!2d-0.0787368337568478!3d51.47101337567429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876031c99d3f805%3A0xa6382a15b1c13718!2sFusion%20Table%20Tennis%20Club!5e0!3m2!1sbg!2sbg!4v1640620327092!5m2!1sbg!2sbg" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>

  )

}

export default Contacts;