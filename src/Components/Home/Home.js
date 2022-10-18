/* eslint-disable react/react-in-jsx-scope */
    // eslint-disable-next-line

import React, { useEffect, useState } from 'react';
import db from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';

// import * as bookService from '../../services/bookService';


function Home() {

    // const [setBooking] = useState([]);

    // useEffect(() => {
    //     bookService.getAll()
    //         .then(result => {
    //             setBooking(result);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [setBooking]);

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users');
  
    useEffect(() => {
  
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((user) => ({ ...user.data(), id: user.id })))
  
      };
  
  
      getUsers();
  
    }, []);



    return (

        <div>
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">

                <div className="bg-overlay"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-10 mx-auto col-12">
                            <div className="hero-text mt-5 text-center">

                                <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">Upgrade your table tennis skills with me!</h1>

                                <a href="/positioning-page" className="text-primary-color" data-aos="fade-up" data-aos-delay="600">Learn how to improve your body position!</a>
                               <p>{users.email}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home;