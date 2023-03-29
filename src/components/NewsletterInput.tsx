import React from "react";

export default function NewsletterInput() {
  return (
    <div className="newsletter-input-container flex items-center border border-white rounded-md w-[100%] h-auto font-poppins"
    >
      <label htmlFor="#newsletter-input" className="hidden"></label>
      <input
        type="email"
        name=""
        id="newsletter-input"
        placeholder="Enter your email"
        title="Larks podcast newsletter"
        autoComplete="true"
        className="outline-0 border-0 rounded-l-md w-[70%] h-[40px] custom-bg-color-primary p-5"
      />
      <button
        type="button"
        title="Larks podcast newsletter sign up button"
        className="bg-white w-[30%] h-[40px] font-semibold sm:font-bold border-r border-y border-orange-300 rounded-r text-[0.75rem] sm:text-[1.1rem]"
      >
        Sign Up
      </button>
    </div>
  );
}
