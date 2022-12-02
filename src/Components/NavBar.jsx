import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const [pageState, setPageState] = useState("Signin");
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const auth = getAuth();
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
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
    <div className="bg-white border-b shadow-sm sticky top-0  z-20">
      <header className="flex justify-between items-center  max-w-6xl mx-auto">
        <div>
          <img
            src="https://rails-assets-us.bookshop.org/assets/logo-a52621fe944d907a0a91448f35b41eca07947302711d35c3322a99144928f1aa.svg"
            alt="logo"
            className="h-5 cursor-pointer "
            // height={450}
            // width={350}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="justify-center">
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/Contactus") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/Contactus")}
            >
              Contact Us
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/Payment") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/Payment")}
            >
             Payment
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
          </ul>
        </div>
        <div >
          
          <ul className="flex space-x-10 ">
            <li
              className={`cursor-pointer py-3 mt-2 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/signin") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            
</li>
<li
            
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/cart") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/cart")}
           > 
           <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

           
              <img src="https://media.istockphoto.com/id/898295684/vector/shopping-cart-icon-silhouette-2.jpg?s=612x612&w=0&k=20&c=lFMSnfCGyDY_75OSYECSZEII1HR3gJ7lum4br6B3VHQ="  class="object-scale-down  w-10   rounded-border-4 border-lime-500 ..." alt="Logo" />
              </div>
              {isHovering && <h2> Cart</h2>}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
