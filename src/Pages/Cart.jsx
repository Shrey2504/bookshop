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

import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../Components/Spinner";
import ListingItem from "../Components/ListingItem"
import { list } from "firebase/storage";

export default function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchListing] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

  let userID = "default";
  if (user) {
    userID = user.uid;
    // console.log("userID: " + userID);
  }
  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, "listings");
        
        const q = query(
          listingRef,
          limit(8)
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
      const listingRef = collection(db, "listings");
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

  return (
    <div className="max-w-6xl mx-auto px-3">
      <h1 className="text-3xl text-center mt-6 font-bold mb-6">Your Cart</h1>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
        {console.log(listings)}
        <main>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No items added in cart</p>
      )}
    </div>
  );
}
