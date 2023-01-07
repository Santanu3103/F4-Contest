import React from 'react';
import './Nav.css';

function Nav() {
    return(
        <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand ">Home</a>
          <form className="d-flex" role="search">
            <button className="btn " type="submit">Sign up</button>
            <button className="btn " type="submit">Profile</button>
          </form>
        </div>
      </nav>
    )
       
}

export default Nav;