// import { db } from "../firebase";
// import { getAuth } from "firebase/auth";
// import { useState,useEffect } from "react";
// import React from 'react'
// import {
//   collection,
//   getDoc,
//   getDocs,
//   limit,
//   orderBy,
//   query,
//   where,
// } from "firebase/firestore";

// const Cart = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;

// let userID ="default";
// if (user) {
//   userID = user.uid
//   console.log("userID: " + userID);
// }
// const ref = collection(db,"cart "+ userID)

//   const[data,setdata] = useState([])
//   const[loader,setloader] = useState(true)

//   function getData(){

//   }

//   return (
//     <div>
//       Cart
//     </div>
//   )
// }

// export default Cart
import { FaTrash,FaShoppingCart, } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../Components/Spinner";
import ListingItem from "../Components/ListingItem"
import { list } from "firebase/storage";


export default function Cart() {
  const navigate = useNavigate();
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchListing] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

  let userID = "default";
  if (user) {
    userID = user.uid;
    console.log("userID: " + userID);
  }
  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, "cart "+ userID);
        
        const q = query(
          listingRef,
          limit(1000)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listing");
      }
    }

    fetchListings();
  }, []);

  async function onFetchMoreListings() {
    try {
      const listingRef = collection(db,"cart "+ userID);
      const q = query(
        listingRef,
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(4)
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings((prevState)=>[...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listing");
    }
  }

  async function onDelete(listingID) {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, "cart "+ userID, listingID));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingID
      );
      setListings(updatedListings);
      toast.success("Successfully deleted the listing");
    }
    
  }

  async function onFetchMoreListings() {
    try {
      const listingRef = collection(db, "cart "+ userID);
      const q = query(
        listingRef,
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listing");
    }
  }
let total_amount = 0;
  return (
    <>
    
    <div className="max-w-6xl mx-auto px-3">
      <h1 className="text-3xl text-center mt-6 font-bold mb-6">Your Cart</h1>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
        {console.log(listings)}
        <main>
        {listings?.map(({ id, data }) => (
        
            <tr className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]" key={id}>
              <td>
              <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-semibold text-l">
                <li className="flex items-center whitespace-nowrap">
                {data.name}
                </li>
              </p>
            </div>
          </div>

                </td>
              <td>
              <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xl">
                <li className="flex items-center whitespace-nowrap">
                ₹ {data.price}
                </li>
                {console.log(total_amount=parseInt(total_amount)+parseInt(data.price))}
              </p>
            </div>
          </div>
                </td>
              <td>
              <img
            className="h-[180px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
            loading="lazy"
            src={data.book_image}
          /></td>
              <td>
              <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-l">
                <li className="flex items-center whitespace-nowrap">
                  <GiWhiteBook className="text-l" />
                   {data.quantity > 0
                    ? `${data.quantity} Book`
                    : " 1 Book"}
                </li>
              </p>
            </div>
          </div>
               </td>
               <td>
               {onDelete && (
          <FaTrash
            className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
            onClick={() => onDelete(id)}
            />
            )}
               </td>
            </tr>
          ))}
          </main>
          <div>
          <h1 className="text-3xl text-center mt-6 font-bold mb-6">Total Amount: ₹ {total_amount}</h1>
          </div>
          <button
            type="submit"
            value={total_amount}
            className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <Link
              to="/Payment"
              className="flex justify-center items-center"
              
            >
              <GiBookshelf className="mr-2 text-3xl bg-black rounded-full p-1 border-2" />
              CONFIRM ORDER!
            </Link>
          </button>       
        </>
      ) : (
        <p>No items added in cart</p>

      )}
    </div>
    
    </>
  );
}
