import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { navLinks } from '../../constants';
import { logo, menu, close } from '../../assets/index.js';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link
          to="/"
          className="nav__menu"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="nav__img" />
          <p>Mina &nbsp; <span>| React + Three JS Portfolio</span></p>
        </Link>

        {/* Desktop Navigationbar */}
        <ul className="nav__link">
          {navLinks.map((link, key) => (
            <li
              key={key}
              className={`${active === link.title ? "font-white" : "font-gray"
                }`}
              onClick={() => {
                setActive(link.title)
              }}>
              <a href={`#${link.id}`}>{link.title}</a></li>
          ))}
        </ul>
        <div className="nav__toggle">
          <div className="nav__toggle-btn">
            <img src={toggle ? close : menu} alt="menu" className="nav__mobile-burger" onClick={() => setToggle(!toggle)} />
          </div>
          {toggle === true &&
            <ul className="nav__toggle-link">
              {navLinks.map((link, key) => (
                <li
                  key={key}
                  className={`${active === link.title ? "font-white" : "font-gray"
                    }`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a></li>
              ))}
            </ul>}
        </div>
      </div>
    </nav >
  )
}

export default Navbar