import React from "react";
import { Link } from "react-router-dom";
import evisalogo from "../../assets/logo/evisa-logo.png";

const Header = () => {
  return (
    <div className="navbar bg-zinc-800 text-white aligh-center justify-around">
      <Link to="/" className="normal-case text-xl">
        <img className="w-2/6" src={evisalogo} alt="evisa logo" />
        <div className="text-start">
          <p className="text-3xl">Syrian Visa</p>
          <p>Online Application System</p>
        </div>
      </Link>
      <div className="dropdown dropdown-left">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Syria
        </Link>
      </div>
    </div>
  );
};

export default Header;
