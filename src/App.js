/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import { React, useEffect, useState } from 'react';
import { auth } from './firebase-config'
// import { collection, getDocs } from 'firebase/firestore/lite';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import PositioningPage from "./Components/PositioningPage/PositioningPage";
import Coaching from "./Components/Coaching/Coaching";
import BookASession from "./Components/BookASession/BookASession";
import Contacts from "./Components/Contacts/Contacts";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import MySessions from "./Components/MySessions/MySessions";
import Details from "./Components/Details/Details";
// import Edit from './Components/Edit/Edit';
import Logout from "./Components/Logout";
import Header from "./Components/Header/Header";
import Notification from './Components/Common/Notification';
import ErrorBoundary from './Components/Common/ErrorBoundary';
import PrivateRoute from './Components/Common/PrivateRoute';
// import GuardedRoute from './Components/Common/GuardedRoute';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if(user) {
  //       navigate("/")
  //     }
  //     setIsAuth(user)
  //   })
  // }, [navigate])

  return (
    <ErrorBoundary>
      <NotificationProvider>
        <AuthProvider value={setIsAuth}>

          <div id="container">

            <Header />

            <Notification />

            <main id="site-content">


              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} /> */}

                <Route path="/about" element={<About />} />
                <Route path="/positioning-page" element={<PositioningPage />} />

                <Route path="/coaching" element={<Coaching />} />

                {/* <Route element={<GuardedRoute />}> */}
                  {/* <Route path="/book-a-session" element={<BookASession />} /> */}

                {/* </Route> */}

                <Route path="/contacts" element={<Contacts />} />

                {/* <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} /> */}

                {/* <Route path="/my-sessions" element={<PrivateRoute><MySessions /></PrivateRoute>} /> */}
                {/* <Route path="/details/:bookingId" element={<PrivateRoute><Details /></PrivateRoute>} /> */}
                {/* <Route path="/edit/:bookingId" element={<PrivateRoute><Edit /></PrivateRoute>} /> */}

                {/* <Route path="/register" element={<Register />} /> */}

                {/* <Route path="/logout" element={<Logout />} /> */}

              </Routes>


            </main>

            <Footer />

          </div>
        </AuthProvider>

      </NotificationProvider>
    </ErrorBoundary >
  );
}

export default App;
