import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const [navbar, setNavbar] = useState(false);
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

  return (
    <div>
      <nav className="bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                    src="https://rails-assets-us.bookshop.org/assets/logo-a52621fe944d907a0a91448f35b41eca07947302711d35c3322a99144928f1aa.svg"
                    // alt="logo"
                    className="h-5 cursor-pointer "
                    // height={450}
                    // width={350}
                    onClick={() => navigate("/")}
                  />
              </div>
              <div className="hidden md:block">
                <div className="ml-64 flex items-center space-x-8">
                    <ul className="flex items-center space-x-1">
                        <li
                        className={`hover:bg-gray-700 text-black px-3 py-2 rounded-md text-sm font-medium ${
                          pathMatchRoute("/") && "text-black border-b"
                        }`}
                        onClick={() => navigate("/")}
                      >
                        Home
                      </li>
                    
                    <li
                    className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                      pathMatchRoute("/contactus") && "text-black "
                    }`}
                    onClick={() => navigate("/contactus")}
                  >
                    Contact Us
                  </li>

                 
                    <li
                      className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                        pathMatchRoute("/offers") && "text-black border-b"
                      }`}
                      onClick={() => navigate("/offers")}
                    >
                      Offers
                    </li>
                    <li
                      className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                        (pathMatchRoute("/signin") ||
                          pathMatchRoute("/profile")) &&
                        "text-black border-b-red-500"
                      }`}
                      onClick={() => navigate("/profile")}
                    >
                      {pageState}
                    </li>

                    <li
                      className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                        pathMatchRoute("/cart") && "text-black border-b-red-500"
                      }`}
                      onClick={() => navigate("/cart")}
                    >
                      Cart
                    </li>
             </ul>
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ul>

                <li
                className={`hover:bg-gray-700 text-black px-3 py-2 rounded-md text-sm font-medium ${
                  pathMatchRoute("/") && "text-black border-b"
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </li>

              <li
                    className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                      pathMatchRoute("/contactus") && "text-black "
                    }`}
                    onClick={() => navigate("/contactus")}
                  >
                    Contact Us
                  </li>
                  
                  <li
                    className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                      pathMatchRoute("/offers") && "text-black border-b"
                    }`}
                    onClick={() => navigate("/offers")}
                  >
                    Offers
                  </li>
                  <li
                    className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                      (pathMatchRoute("/signin") ||
                        pathMatchRoute("/profile")) &&
                      "text-black border-b-red-500"
                    }`}
                    onClick={() => navigate("/profile")}
                  >
                    {pageState}
                  </li>

                  <li
                    className={`hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium ${
                      pathMatchRoute("/cart") && "text-black border-b-red-500"
                    }`}
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>

     
    </div>
  );
}

export default NavBar;