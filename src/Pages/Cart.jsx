// import React from 'react'
// import { getAuth } from "firebase/auth";
// import { db } from "../firebase";
// import {
//     collection,
//     getDoc,
//     getDocs,
//     limit,
//     orderBy,
//     query,
//     where,
//   } from "firebase/firestore";
//   import { useEffect } from "react";
//   import { useState } from "react";
//   import { Link } from "react-router-dom";
//   import ListingItem from "../Components/ListingItem";

//   const auth = getAuth();
//     const Cart = () => {

//     const [CartListings, setCartListings] = useState(null);
//     useEffect(() => {
//       async function fetchListings() {
//         try {
//           // get reference
//           const listingsRef = collection(db, "cart "+auth.currentUser.uid);
//           // create the query
//           const q = query(
//             listingsRef,
            
//           );
//           // execute the query
//           const querySnap = await getDocs(q);
//           const listings = [];
//           querySnap.forEach((doc) => {
//             return listings.push({
//               id: doc.id,
//               data: doc.data(),
//             });
//           });
//           setCartListings(listings);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//       fetchListings();
//     }, []);

//   return (
//     <div>
//       Cart
//       <div className="max-w-6xl mx-auto pt-4 space-y-6">
//         {CartListings && CartListings.length > 0 && (
//           <div className="m-2 mb-6">
//             <h2 className="px-3 text-2xl mt-6 font-semibold">Recent offers</h2>
//             <Link to="/offers">
//               <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
//                 Show more offers
//               </p>
//             </Link>
//             <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
//               {CartListings.map((listing) => (
//                 <ListingItem
//                   key={listing.id}
//                   listing={listing.data}
//                   id={listing.id}
//                 />
//               ))}
//             </ul>
//           </div>
//         )}
//         </div>
//     </div>
//   )
// }

// export default Cart

import React from 'react'

const Cart = () => {
  return (
    <div>
      Cart
    </div>
  )
}

export default Cart

