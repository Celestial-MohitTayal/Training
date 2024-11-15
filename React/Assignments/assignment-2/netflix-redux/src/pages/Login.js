import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import formValidation from "../utils/formValidation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrMsg("");
  };

  const handleButtonClk = () => {
    const message = formValidation(email.current.value);
    console.log(message);

    //Authentication using localStorage
    if (message == null) {
      if (isSignIn) {
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users?.find(
          (user) => user.email === email.current.value && user.password === pass.current.value
        );
        console.log(users);
        console.log(user);
        if (user == undefined) {
          setErrMsg("Incorrect Email or Password");
        } else {
          setErrMsg("");
          navigate("/home");
        }
      } else {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = {
          name: name.current.value,
          email: email.current.value,
          password: pass.current.value,
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      }
    } else {
      setErrMsg(message);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="bgImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 lg:w-3/12 sm:w-1/2 my-52 mx-auto right-0 left-0 bg-opacity-75
        bg-black text-white rounded-lg"
      >
        <h1 className="m-4 mb-8 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 mx-4 w-11/12 bg-transparent outline outline-slate-300 text-slate-300 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="p-4 my-2 mx-4 w-11/12 bg-transparent outline outline-slate-300 text-slate-300 rounded"
        />
        <input
          ref={pass}
          type="password"
          placeholder="Password"
          className="p-4 my-2 mx-4 w-11/12 bg-transparent outline outline-slate-300 text-slate-300 rounded"
        />
        <p className="text-red-600 px-4 py-2">{errMsg}</p>
        <button
          onClick={handleButtonClk}
          className="py-3 my-2 mx-4 w-11/12 bg-red-600 rounded shadow-lg hover:bg-red-700"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <p className="text-slate-300 p-3 m-4">
            {isSignIn ? "New to Netflix?" : "Already Registered?"}{" "}
            <a
              onClick={toggleForm}
              className="text-white font-bold hover:underline cursor-pointer"
            >
              {isSignIn ? "Sign Up Now" : "Sign In Now"}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
