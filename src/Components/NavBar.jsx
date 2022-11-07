//import React, { useState } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Nav.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const NavBar = () => {

  const [pageState, setPageState] = useState("Signin");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Signin");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }



  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>B</span>ook
            <span>S</span>hop
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          } >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/about">about</NavLink>
            </li> */}
            <li>
              <NavLink to="/Offers">Offers</NavLink>
            </li>
            <li>
              <NavLink to="/ContactUs">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            {/* <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li> */}

<ul className="flex space-x-10">
                <li
                  className={`text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                    (pathMatchRoute("/signin") || pathMatchRoute("/profile")) &&
                    "text-black border-b-red-500"
                  }`}
                  onClick={() => navigate("/profile")}
                >
                  {pageState}
                </li>


                <li>
                <NavLink to="/Offers">Cart</NavLink>
                </li>
              </ul>



          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};


export default NavBar;
