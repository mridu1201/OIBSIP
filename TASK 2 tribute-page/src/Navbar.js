import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Navbar</title>
  <nav className="navbar">
    <div className="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <Link activeClass="active" smooth spy to="introduction">
            <a>Home</a>
          </Link>
        </li>
        <li>
        <Link activeClass="active" smooth spy to="why">
          <a>Why</a>
        </Link>
        </li>
        <li>
        <Link activeClass="active" smooth spy to="timeline">
          <a >Timeline</a>
        </Link>
        </li>
        <li>
        <Link activeClass="active" smooth spy to="about">
          <a >About</a>
        </Link>
        </li>
        <li>
        <Link activeClass="active" smooth spy to="achievements">
          <a >Achievements</a>
        </Link>
        </li>
        <li>
        <Link activeClass="active" smooth spy to="journey">
          <a >Journey</a>
        </Link>
        </li>
        <li>
        <Link activeClass="active" smooth spy to="learnmore">
          <a >Learn More</a>
        </Link>
        </li>
      </ul>
      <img src='https://www.taylorswift.com/files/2023/08/1989_tv_logo-1-600x123.png' className='logo'/>
    </div>
  </nav>
</>

  )
}

export default Navbar