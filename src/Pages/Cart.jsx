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
import Cartltem from "../Components/Cartltem";

export default function Offers() {
  const [Cartlistings, setCartlistings] = useState(null);
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
    async function fetchCartlistings() {
      try {
        const listingRef = collection(db, "cart "+ userID);
        
        const q = query(
          listingRef,
          limit(1000)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const Cartlistings = [];
        querySnap.forEach((doc) => {
          return Cartlistings.push({
            id: doc.id,
            data: doc.data(),
          
          });
        });
        setCartlistings(Cartlistings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listing");
      }
    }

    fetchCartlistings();
  }, []);

  async function onFetchMoreCartlistings() {
    try {
      const listingRef = collection(db, "cart "+ userID);
      const q = query(
        listingRef,
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const Cartlistings = [];
      querySnap.forEach((doc) => {
        return Cartlistings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setCartlistings((prevState) => [...prevState, ...Cartlistings]);
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
      ) : Cartlistings && Cartlistings.length > 0 ? (
        <>
        {console.log(Cartlistings)}
        <main>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {Cartlistings.map((listing) => (
                <Cartltem
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
