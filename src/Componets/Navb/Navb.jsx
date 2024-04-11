
import  styles from './Navbar.module.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useContext } from 'react';
import br from "../../assets/imgs/bro.svg"
import { themeContext } from '../../Context';
import Toggle from '../Toggle/Toggle';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navb = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  return (
<div className="navbar">
      <header>
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png"
            alt="header_logo"
          />
        </Link>

        <nav ref={navRef}>
          <Link t onClick={showNavbar} o="/" className="nav-element">
            <p>Home</p>
          </Link>

          <Link onClick={showNavbar} to="/dashboard" className="nav-element">
            <p>Dashboard</p>
          </Link>

          <Link onClick={showNavbar} to="/projects" className="nav-element">
            <p>Projects</p>
          </Link>

          <Link onClick={showNavbar} to="/about" className="nav-element">
            <p>About</p>
          </Link>

          <Link onClick={showNavbar} to="/profile" className="nav-element">
            <p>Profile</p>
          </Link>

          <Link to="/login" className="nav-element">
            <div className="signin_but">
              <p>Sign In</p>
            </div>
          </Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  )
}

export default Navb