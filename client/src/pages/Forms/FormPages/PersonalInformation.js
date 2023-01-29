import React, { useContext, useState } from "react";
import { DatePicker } from "react-responsive-datepicker";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const PersonalInformation = () => {
  const { userForm, setUserForm } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [issueDate, setIssueDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserForm = { ...userForm, dateOfBirth, issueDate, expiryDate };
    setUserForm(newUserForm);
    setTimeout(() => {
      navigate("/payment");
    }, 100);
  };

  return (
    <div>
      <section>
        <ul className="steps w-full my-4">
          <li className="step step-primary">Choice of Nationality</li>
          <li className="step step-primary">Arrival Information</li>
          <li className="step step-primary">Prerequisites</li>
          <li className="step step-primary">Personal Information</li>
        </ul>
      </section>
      <hr />
      <section className="p-6">
        <form>
          <div className="grid grid-cols-2 pb-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <p className="label-text">
                  GIVEN/FIRST NAME(S)<span className="text-red-400"> *</span>
                </p>
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <p className="label-text">SURNAME(S)</p>
              </label>
              <input
                type="text"
                name="surName"
                required
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div>
              <p className="mt-2">
                DATE OF BIRTH<span className="text-red-400"> *</span>
              </p>
              <button
                className="btn bg-white btn-sm w-2/3 text-black rounded-none"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                {dateOfBirth?.toLocaleDateString()}
              </button>
              <DatePicker
                isOpen={isOpen}
                onChange={(date) => setDateOfBirth(date)}
                onClose={() => setIsOpen(false)}
                defaultValue={new Date(2022, 8, 8)}
                minDate={new Date(2022, 10, 10)}
                maxDate={new Date(2023, 0, 10)}
                headerFormat="DD, MM dd"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <p className="label-text">
                  PLACE OF BIRTH<span className="text-red-400"> *</span>
                </p>
              </label>
              <input
                type="text"
                name="placeOfBirth"
                required
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <p className="label-text">MOTHER'S NAME</p>
              </label>
              <input
                type="text"
                name="motherName"
                required
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <p className="label-text">FATHER'S NAME</p>
              </label>
              <input
                type="text"
                name="fatherName"
                required
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div>
              <p className="mt-2">
                PASSPORT ISSUE DATE<span className="text-red-400"> *</span>
              </p>
              <button
                className="btn bg-white btn-sm w-2/3 text-black rounded-none"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                {dateOfBirth?.toLocaleDateString()}
              </button>
              <DatePicker
                isOpen={isOpen}
                onChange={(date) => setIssueDate(date)}
                onClose={() => setIsOpen(false)}
                defaultValue={new Date(2022, 8, 8)}
                minDate={new Date(2022, 10, 10)}
                maxDate={new Date(2023, 0, 10)}
                headerFormat="DD, MM dd"
              />
            </div>
            <div>
              <p className="mt-2">
                PASSPORT EXPIRY DATE<span className="text-red-400"> *</span>
              </p>
              <button
                className="btn bg-white btn-sm w-2/3 text-black rounded-none"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                {dateOfBirth?.toLocaleDateString()}
              </button>
              <DatePicker
                isOpen={isOpen}
                onChange={(date) => setDateOfBirth(date)}
                onClose={() => setExpiryDate(false)}
                defaultValue={new Date(2022, 8, 8)}
                minDate={new Date(2022, 10, 10)}
                maxDate={new Date(2023, 0, 10)}
                headerFormat="DD, MM dd"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="btn submit bg-green-500 rounded-none border-none"
            >
              Submit And Pay
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PersonalInformation;
