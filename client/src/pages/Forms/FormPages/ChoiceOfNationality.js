import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const ChoiceOfNationality = () => {
  const [checked, setChecked] = useState(false);
  const { userForm, setUserForm } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChecked = (e) => {
    const checkBox = e.target.value;
    if (!checkBox) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const country = e.target.country.value;
    const idType = e.target.idType.value;
    const newUserForm = { ...userForm, idType, country };
    setUserForm(newUserForm);
    setTimeout(() => {
      navigate("/arrival");
    }, 100);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className="steps w-full my-4">
        <li className="step step-primary">Choice of Nationality</li>
        <li className="step">Arrival Information</li>
          <li className="step">Prerequisites</li>
        <li className="step">Personal Information</li>
      </ul>
      <hr />
      <section className="p-6">
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <p className="label-text">
              COUNTRY / REGION
              <span className="text-red-600 text-bold"> *</span>
            </p>
          </label>
          <select
            name="country"
            className="select select-bordered rounded-none"
          >
            <option disabled>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <p className="label-text">
              TRAVEL DOCUMENT
              <span className="text-red-600 text-bold"> *</span>
            </p>
          </label>
          <select name="idType" className="select select-bordered rounded-none">
            <option disabled>Pick one</option>
            <option>Passport</option>
            <option>Identity Card</option>
          </select>
        </div>
      </section>
      <section className="p-6">
        <p className="text-red-500">
          Please click on the checkbox below to confirm the country you have
          selected.
        </p>
        <div className="flex align-center gap-2 bordered">
          <input
            onChange={handleChecked}
            type="checkbox"
            name="checkbox"
            className="checkbox checkbox-md rounded-none mb-4"
          />
          <span>Confirm</span>
        </div>
      </section>
      <hr />
      <section className="p-6">
        <button
          disabled={!checked}
          className="btn bg-green-500 rounded-none border-none"
        >
          Next
        </button>
      </section>
    </form>
  );
};

export default ChoiceOfNationality;
