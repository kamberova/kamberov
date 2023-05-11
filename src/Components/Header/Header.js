
import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";

function Header() {

  const { user } = useAuthContext();
  let userName = '';

  if (user) {
    let token = user.email.split('@');
    let name = token[0];
    let firstLetter = name[0].toUpperCase();
    let restName = name.slice(1);
    userName = firstLetter + restName + '!';
  }

  let guestNavigation = (
    <div id="guest">
      <ul className="navbar-nav ml-lg-auto">

        <li className="nav-item">
          <a href="/about" className="nav-link smoothScroll">About Me</a>
        </li>

        <li className="nav-item">
          <a href="/positioning-page" className="nav-link smoothScroll">Body Position</a>
        </li>

        <li className="nav-item">
          <a href="/coaching" className="nav-link smoothScroll">Coaching</a>
        </li>

        <li className="nav-item">
          <a href="/contacts" className="nav-link smoothScroll">Contacts</a>
        </li>

        <li className="nav-item">
          <a href="/login" className="nav-link smoothScroll">Login</a>
        </li>

        <li className="nav-item">
          <a href="/register" className="nav-link smoothScroll">Register</a>
        </li>

      </ul>

    </div>
  );

  let userNavigation = (



    <div id="user">

      <ul className="navbar-nav ml-lg-auto">

        <li className="nav-item">
          <a href="/coaching" className="nav-link smoothScroll">Coaching</a>
        </li>

        <li className="nav-item">
          <a href="/positioning-page" className="nav-link smoothScroll">Body Position</a>
        </li>

        <li className="nav-item">
          <a href="/book-a-session" className="nav-link smoothScroll">Book a session</a>
        </li>

        <li className="nav-item">
          <a href="/my-sessions" className="nav-link smoothScroll">My Sessions</a>
        </li>

        <li className="nav-item">
          <a href="/about" className="nav-link smoothScroll">About Me</a>
        </li>

        <li className="nav-item">
          <a href="/contacts" className="nav-link smoothScroll">Contacts</a>
        </li>

        <li className="nav-item">
          <a href="/logout" className="nav-link smoothScroll">Logout</a>
        </li>

      </ul>
    </div>
  );


  return (
    <header>

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <img src="/images/logo.jpg" className="nav-logo" alt="Class" />
          <span className="username">{user ? 'Welcome, ' + userName : ''}</span>

          <a className="navbar-brand" href="/">Home</a>

          <button className="navbar-toggler" type="button" data-toggle="" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">



            <ul className="navbar-nav ml-lg-auto">


              {user
                ? userNavigation
                : guestNavigation
              }

            </ul>



            <ul className="social-icon ml-lg-3">
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="https://www.facebook.com/kamberov" className="fa fa-facebook"></a>
              </li>
            </ul>

          </div>

        </div>
      </nav>


    </header>
  )
}

export default Header;