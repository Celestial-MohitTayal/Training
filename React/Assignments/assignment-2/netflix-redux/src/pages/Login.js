import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="bgImage"
        />
      </div>
      <form className="w-3/12 relative p-12 bg-black ">
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
