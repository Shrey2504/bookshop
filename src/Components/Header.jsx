// // import React, { useState } from "react";
// // import "./Nav.css";
// // import {
// //   FaFacebookSquare,
// //   FaInstagramSquare,
// //   FaYoutubeSquare,
// // } from "react-icons/fa";
// // import { GiHamburgerMenu } from "react-icons/gi";

// // import { NavLink } from "react-router-dom";

// // const Header = () => {
// //   const [showMediaIcons, setShowMediaIcons] = useState(false);
// //   return (
// //     <>
// //       <nav className="main-nav">
// //         {/* 1st logo part  */}
// //         <div className="logo">
// //           <h2>
// //             <span>T</span>hapa
// //             <span>T</span>echnical
// //           </h2>
// //         </div>

// //         {/* 2nd menu part  */}
// //         <div
// //           className={
// //             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
// //           }>
// //           <ul>
// //             <li>
// //               <NavLink to="/">Home</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/about">about</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/service">services</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/contact">contact</NavLink>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* 3rd social media links */}
// //         <div className="social-media">
// //           <ul className="social-media-desktop">
// //             <li>
// //               <a
// //                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
// //                 target="_thapa">
// //                 <FaFacebookSquare className="facebook" />
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 href="https://www.instagram.com/thapatechnical/"
// //                 target="_thapa">
// //                 <FaInstagramSquare className="instagram" />
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
// //                 target="_thapa">
// //                 <FaYoutubeSquare className="youtube" />
// //               </a>
// //             </li>
// //           </ul>

// //           {/* hamburget menu start  */}
// //           <div className="hamburger-menu">
// //             <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
// //               <GiHamburgerMenu />
// //             </a>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* hero section  */}
// //       {/* <section className="hero-section">
// //         <p>Welcome to </p>
// //         <h1>Thapa Technical</h1>
// //       </section> */}
// //     </>
// //   );
// // };

// // export default Header;






// import React from "react";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const NavBar = () => {
//   const [pageState, setPageState] = useState("Signin");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const auth = getAuth();
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setPageState("Profile");
//       } else {
//         setPageState("Signin");
//       }
//     });
//   }, [auth]);
//   function pathMatchRoute(route) {
//     if (route === location.pathname) {
//       return true;
//     }
//   }

//   return (
//     <>
//       <nav className=" bg-white cursor-pointer px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="container flex flex-wrap justify-between items-center mx-auto">
//           <a href="https://flowbite.com/" className="flex items-center">
//             <img
//               src="https://rails-assets-us.bookshop.org/assets/logo-a52621fe944d907a0a91448f35b41eca07947302711d35c3322a99144928f1aa.svg"
//               className="mr-3 h-6 sm:h-9"
//               alt="Flowbite Logo"
//               onClick={() => navigate("/")}
//             />
//           </a>
//           <div className="flex md:order-2">
//             {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in </button> */}

//             <div>
//               <ul className="flex space-x-10">
//                 <li
//                   className={`text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
//                     (pathMatchRoute("/signin") || pathMatchRoute("/profile")) &&
//                     "text-black border-b-red-500"
//                   }`}
//                   onClick={() => navigate("/profile")}
//                 >
//                   {pageState}
//                 </li>
//               </ul>
//             </div>

//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           <div
//             className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky" 
//           >
//             <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   className={`cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white ${
//                     pathMatchRoute("/") && "text-black border-b-red-500"
//                   }`}
//                   aria-current="page"
//                   onClick={() => navigate("/contactus")}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700${
//                     pathMatchRoute("/Offers") && "text-black border-b-red-500"
//                   }`}
//                   onClick={() => navigate("/contactus")}
//                 >
//                   Offers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
//                     pathMatchRoute("/contactus") &&
//                     "text-black border-b-red-500"
//                   }`}
//                   onClick={() => navigate("/contactus")}
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBar;












































