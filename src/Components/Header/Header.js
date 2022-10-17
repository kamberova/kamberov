// import { Route, Switch, Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";


function Header() {
  const { user } = useAuthContext();

  let guestNavigation = (
    <div id="guest">
      <ul className="navbar-nav ml-lg-auto">

        <li className="nav-item">
          <a href="/about" className="nav-link smoothScroll">About Me</a>
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
      <span className="text-white">Welcome, {user.email}</span>
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

          <a className="navbar-brand" href="/">Home</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">



            <ul className="navbar-nav ml-lg-auto">

              {user.email
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