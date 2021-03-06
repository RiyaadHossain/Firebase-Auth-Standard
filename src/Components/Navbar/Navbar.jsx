import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Logo from "../../Assets/Logo/logo.png";
import auth from "../../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="container mx-auto flex items-center justify-between h-20">
      <div>
        <img className="w-32" src={Logo} alt="" />
      </div>
      <nav className="flex items-center">
        <Link className="ml-7 font-semibold text-2xl" to={"/cart"}>
          <BsCart3 />
        </Link>
        {user ? <p className="ml-7 font-semibold text-lg">Log Out</p> : <Link className="ml-7 font-semibold text-lg" to={"/signin"}>
          Log In
        </Link>}
        <Link
          className="ml-7 font-semibold text-lg bg-orange-500 text-white py-1 px-4 rounded-full"
          to={"/signup"}
        >
          Sign Up
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
