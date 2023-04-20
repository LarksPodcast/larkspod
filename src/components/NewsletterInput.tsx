import React, { useState } from "react";

export default function NewsletterInput() {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    message: {
      message: "",
      color: "",
    },
    error: "",
  });

  const handleSubmit = async () => {
    setState((state) => ({ ...state, isLoading: true }));

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // match email
    if (state.email === "") {
      setState((state) => ({
        ...state,
        isLoading: false,
        message: {
          message: "Email field can not be empty!",
          color: "text-red-800",
        },
      }));
      return;
    }

    if (emailRegex.test(state.email) === false) {

      console.log(emailRegex.test(state.email));
      setState((state) => ({
        ...state,
        isLoading: false,
        message: {
          message: "Invalid email!",
          color: "text-red-800",
        },
      }));
      return;
    }

    try {
      const res = await fetch("https://api.getresponse.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "X-Auth-Token": `api-key ${process.env.NEXT_PUBLIC_LARKS_NEWSLETTER_API_KEY}`,
        },
        body: JSON.stringify({
          name: "Lark",
          campaign: { campaignId: "f1jOH" },
          email: state.email,
        }),
      }).then((data) => data.json());

      if (res.status === 200) {
        setState((state) => ({
          ...state,
          isLoading: false,
          message: {
            email:"",
            message: "Awesome! TTYS 🎉📱",
            color: "text-green-800",
          },
        }));
      }
    } catch (e) {
      setState((state) => ({
        ...state,
        isLoading: false,
        message: {
          message: "Unable to send email!",
          color: "text-red-800",
        },
      }));
    }
  };

  return (
    <div className="">
      <div className="newsletter-input-container w-auto h-auto font-poppins flex items-center">
        <div className="border border-white rounded-md w-[100%]">
          <label htmlFor="#newsletter-input" className="hidden"></label>
          <input
            type="email"
            name=""
            value={state.email}
            id="newsletter-input"
            placeholder="Enter your email"
            title="Larks podcast newsletter"
            autoComplete="true"
            className="outline-0 border-0 rounded-l-md w-[70%] h-[40px] custom-bg-color-primary p-5"
            onChange={(e) =>
              setState((state) => ({ ...state, email: e.target.value }))
            }
          />
          <button
            type="button"
            title="Larks podcast newsletter sign up button"
            className="bg-white w-[30%] h-[40px] font-semibold sm:font-bold border-r border-y border-orange-300 rounded-r text-[0.75rem] sm:text-[1.1rem]"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div className={`${state.isLoading ? "loader" : "hidden"} ml-2`}></div>
      </div>
      {state.message.message ? (
        <small className={`${state.message.color}`}>
          {state.message.message}
        </small>
      ) : null}
    </div>
  );
}
