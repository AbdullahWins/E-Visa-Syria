import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-gray-500 text-gray-300 py-6">
      <p className="flex justify-center gap-4">
        <i class="fa-brands fa-cc-visa text-3xl hover:text-white"></i>
        <i class="fa-brands fa-cc-mastercard text-3xl hover:text-white"></i>
        <i class="fa-brands fa-cc-discover text-3xl hover:text-white"></i>
        <i class="fa-brands fa-cc-amex text-3xl hover:text-white"></i>
        <i class="fa-brands fa-cc-diners-club text-3xl hover:text-white"></i>
        <i class="fa-brands fa-cc-visa text-3xl hover:text-white"></i>
      </p>
      <div>
        <p>
          <Link to="/" className="hover:text-white">
            Terms and Conditions
          </Link>
        </p>
        <p>
          <Link to="/" className="hover:text-white">
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link to="/" className="hover:text-white">
            Turkey Visa
          </Link>{" "}
          - Online Application System
        </p>
      </div>
    </section>
  );
};

export default Footer;
