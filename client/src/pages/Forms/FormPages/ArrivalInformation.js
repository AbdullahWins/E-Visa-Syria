import React, { useContext, useState } from "react";
import { DatePicker } from "react-responsive-datepicker";
import "react-responsive-datepicker/dist/index.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const ArrivalInformation = () => {
  const { userForm, setUserForm } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [packageName, setPackageName] = useState(null);
  const navigate = useNavigate();

  function radioOnChange(event) {
    setPackageName(event.target.value);
    console.log(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrivalDate = date?.toLocaleDateString();
    const newUserForm = { ...userForm, packageName, arrivalDate };
    setUserForm(newUserForm);
    setTimeout(() => {
      navigate("/prerequisites");
    }, 100);
  };

  return (
    <section>
      <ul className="steps w-full my-4">
        <li className="step step-primary">Choice of Nationality</li>
        <li className="step step-primary">Arrival Information</li>
        <li className="step">Prerequisites</li>
        <li className="step">Personal Information</li>
      </ul>
      <hr />
      <section className="flex items-center justify-center">
        <form
          onChange={radioOnChange}
          className="flex gap-4 text-white text-xl pb-6"
        >
          <label className="label cursor-pointer">
            <div className="card bg-blue-400 p-4 hover:shadow-lg scale-100 hover:scale-105">
              <div className="text-center">
                <h2 className="font-bold pb-4">STANDARD</h2>
                <hr />
                <p className="text-3xl p-4">$70 USD </p>
                <p>Get your e-visa in average </p>
                <p className="text-2xl p-4">4 Days</p>
                <hr />
                <div className="p-4">
                  <p>If any additional security</p>
                  <p>checking required:</p>
                </div>
                <p className="text-bold underline"> May take up to 28 Days</p>
              </div>
              <div className="text-center mt-4">
                <input
                  type="radio"
                  value="STANDARD"
                  name="radio"
                  className="radio radio-secondary"
                />
              </div>
            </div>
          </label>
          <label className="label cursor-pointer">
            <div className="card bg-slate-400 p-4 hover:shadow-lg scale-100 hover:scale-105">
              <div className="text-center">
                <h2 className="font-bold pb-4">FAST</h2>
                <hr />
                <p className="text-3xl p-4">$100 USD </p>
                <p>Get your e-visa in average </p>
                <p className="text-2xl p-4">2 Days</p>
                <hr />
                <div className="p-4">
                  <p>If any additional security</p>
                  <p>checking required:</p>
                </div>
                <p className="text-bold underline"> May take up to 14 Days</p>
              </div>
              <div className="text-center mt-4">
                <input
                  type="radio"
                  value="FAST"
                  name="radio"
                  className="radio radio-secondary"
                />
              </div>
            </div>
          </label>
          <label className="label cursor-pointer">
            <div className="card bg-red-400 p-4 hover:shadow-lg hover:border-black scale-100 hover:scale-105">
              <div className="text-center">
                <h2 className="font-bold pb-4">EXPRESS</h2>
                <hr />
                <p className="text-3xl p-4">$180 USD </p>
                <p>Get your e-visa in average </p>
                <p className="text-2xl p-4">Same Day</p>
                <hr />
                <div className="p-4">
                  <p>If any additional security</p>
                  <p>checking required:</p>
                </div>
                <p className="text-bold underline"> May take up to 2 Days</p>
              </div>
              <div className="text-center mt-4">
                <input
                  type="radio"
                  value="EXPRESS"
                  name="radio"
                  className="radio radio-secondary"
                />
              </div>
            </div>
          </label>
        </form>
      </section>
      <section className="text-red-400 text-center pb-6">
        <p>
          In order for your visa application process to be minimally affected by
          the disruption caused by Covid-19 pandemic.
        </p>
        <p>
          It is highly recommended that you choose the "Express" processing
          type.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center pb-6">
        <p className="text-bold">
          ARRIVAL DATE IN TURKEY <span className="text-red-400">*</span>
        </p>
        <p className="flex items-center py-2">
          Selected date:
          <span className="text-green-400 text-2xl text-bold">
            "{date?.toLocaleDateString()}"
          </span>
        </p>
        <div>
          <button
            className="btn bg-white text-black rounded-none"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Select Date Here
          </button>
          <DatePicker
            isOpen={isOpen}
            onChange={(date) => setDate(date)}
            onClose={() => setIsOpen(false)}
            defaultValue={new Date(2022, 8, 8)}
            minDate={new Date(2022, 10, 10)}
            maxDate={new Date(2023, 0, 10)}
            headerFormat="DD, MM dd"
          />
        </div>
      </section>
      <hr />
      <section className="py-4 flex justify-center">
        <button
          onClick={handleSubmit}
          className="btn submit bg-green-500 rounded-none border-none"
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default ArrivalInformation;
