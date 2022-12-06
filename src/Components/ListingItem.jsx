import Moment from "react-moment";
import { Link } from "react-router-dom";
import { GiWhiteBook } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import { FaTrash,FaShoppingCart, } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "@material-tailwind/react";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { icon } from "leaflet";


export default function ListingItem({ listing, id, onEdit, onDelete }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser;

let userID ="default";
if (user) {
  userID = user.uid
}
const userCollectionRef = collection(db, "cart "+ userID);
  // Adding individual items to cart
  const handleAddToCart=()=>{
    console.log(listing.name);
    console.log(auth.currentUser.uid);
      addDoc(userCollectionRef, {
        name: listing.name,
        quantity: 1,
        price : listing.discountedPrice ? listing.discountedPrice: listing.regularPrice,
        book_image: listing.imgUrls
      }).then(() => { 
         toast.success("Books Added Successfully!"); 
      },[auth.currentUser.uid])
      .catch((error) => {
        toast.error("Error Occured: " + error.message);
      });
    
}   
  return (
    <>
      <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
        <Link className="contents" to={`/category/${listing.name}/${id}`}>
          <img
            className="h-[180px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
            loading="lazy"
            src={listing.imgUrls[0]}
          />
          <Moment
            className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
            fromNow
          >
            {listing.timestamp?.toDate()}
          </Moment>

          <p className="font-semibold m-0 text-sm truncate text">
            {listing.name}
          </p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            ₹
            {listing.offer
              ? listing.discountedPrice

                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-l">
                <li className="flex items-center whitespace-nowrap">
                  <GiWhiteBook className="text-l" />
                  {listing.quantity > 1
                    ? `${listing.quantity} Books`
                    : " 1 Book"}
                </li>
              </p>
            </div>
          </div>
          
        </Link>
        {onDelete && (
          <FaTrash
            className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
            onClick={() => onDelete(listing.id)}
          />
        )}
        {onEdit && (
          <MdEdit
            className="absolute bottom-2 right-7 h-[14px] cursor-pointer "
            onClick={() => onEdit(listing.id)}
          />
        )}
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img src="https://media.istockphoto.com/id/898295684/vector/shopping-cart-icon-silhouette-2.jpg?s=612x612&w=0&k=20&c=lFMSnfCGyDY_75OSYECSZEII1HR3gJ7lum4br6B3VHQ=" onClick={handleAddToCart} class="object-scale-down h-10 w-10 mt-2 mb-2 rounded-border-4 border-lime-500 ..." />
        
        
        </div>
        {isHovering && <h3><b>Add to Cart</b> </h3>}
      </li>
    </>
  );
}
