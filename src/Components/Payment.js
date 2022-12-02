import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { getAuth, updateProfile } from "firebase/auth";
import Listing from "../Pages/Listing";


function Payment() {
    const auth = getAuth();
    const onToken = (token) => {
        console.log(token);
    }
 return <div align="center" className="max-w-6xl mx-auto px-3">
    <h1 className="text-3xl text-center mt-6 font-bold mb-6">Payment Gateway</h1>
    <img src="https://www.paydollar.in/images/creditcard-img1-india.jpg" class="object-scale-down h-48 w-66 mb-8 border-4 border-lime-500 border-double ..." alt="..." />
          <StripeCheckout 
        token={onToken}
        name= {auth.currentUser.displayName}
        currency ="INR"
        amount = {Listing.regularPrice}
        stripeKey="pk_test_51MASWxSAxlAgsURqlwlBr4qTffS5on7ypKksXqOW6TnUmrIXIc9k0LQuZRCS3r98gHrj7TMR4OHAsf9Lpnn08qdn003hrlzfSp"
      />


<div className="mt-8 mp-8 flex justify-center items-center">
        <strong className="flex pb-4 pt-4 rounded-lg border-4 border-rose-500 font-mono justify-center text-zinc-50 font-bold text-lg items-center bg-slate-900">
            This is a Bookshop.org website
            and orders cannot be placed using this website. This website is purely build for educational and practice purposes.
        </strong>
    </div>
 </div>
}

export default Payment;