import React from "react";
import "./Homs.css";
import bg from "../../assets/img/bg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white">
      <section className="relative">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={bg} className="w-full" alt="" />
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={bg} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute top-2 left-40 text-4xl text-start flex flex-col ml-2">
          <Link to="/" className="bg-sky-400 opacity-40 p-2">
            Get Information
          </Link>
          <Link to="/form" className="bg-red-700 opacity-80 py-4 px-2 text-5xl">
            Apply Now
          </Link>
        </div>
        <div className="absolute bottom-20 right-40 text-2xl text-end mr-2">
          <p className="bg-black opacity-70 p-2">In 3 Steps</p>
          <p className="bg-black opacity-70 p-2">your e-Visa is ready!</p>
        </div>
        <div className="absolute bottom-0 w-full text-2xl">
          <div className="flex justify-around">
            <Link to="/form" className="bg-rose-900 p-4">
              <p>#1 Apply</p>
            </Link>
            <Link to="/" className="bg-rose-600 p-4">
              <p>#2 Make Payment</p>
            </Link>
            <Link to="/" className="bg-rose-900 p-4">
              <p>#3 Download</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="text-stone-700 bg-slate-300 py-6">
        <div className="flex justify-around">
          <div>
            <h2 className="text-xl font-bold">Application</h2>
            <p>
              <Link to="/form">New Application</Link>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">About e-Visa</h2>
            <p>
              <Link to="/">FAQ</Link>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>
              <Link to="/">Contact Information</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
