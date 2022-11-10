import React from "react";
import "../index.css";
import { db } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  
  const userCollectionRef = collection(db, "contactdata");

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
      .then(() => { 
        if (! toast.success("🥳🥳Submitted Successfully!! 🥳🥳")); 
        document.location = "./";
      },[10000])
      .catch((error) => {
        toast.error("Not Submitted,          TRY AGAIN!!!!");
      });
  };
  
  return (
    <>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-900 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-8">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                name="Your Name"

              >
                Your Name
              </label>
              <input
                onChange={(event) => setName(event.target.value)}
                type="text"
                // id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Rahul"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Your email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                // id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Subject
              </label>
              <input
                for="subject"
                onChange={(event) => setSubject(event.target.value)}
                type="text"
                // id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Your message
              </label>
              <textarea
                onChange={(event) => setMessage(event.target.value)}
                // id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              />
            </div>
          </form>
          <button
            onClick={handleSubmit}
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;