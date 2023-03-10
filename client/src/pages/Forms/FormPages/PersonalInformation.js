import React, { useContext, useState } from "react";
import { DatePicker } from "react-responsive-datepicker";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const PersonalInformation = () => {
  const { userForm, setUserForm } = useContext(AuthContext);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [issueDate, setIssueDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const birthDate = dateOfBirth?.toLocaleDateString();
    const passportIssueDate = issueDate?.toLocaleDateString();
    const passportExpiryDate = expiryDate?.toLocaleDateString();
    const emailAddress = e.target?.emailAddress?.value;
    const confirmEmail = e.target?.confirmEmail?.value;
    const fullAddress = e.target?.fullAddress?.value;
    const newUserForm = {
      ...userForm,
      birthDate,
      passportIssueDate,
      passportExpiryDate,
      emailAddress,
      confirmEmail,
      fullAddress,
    };
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
            <div className="w-2/3">
              <p className="mt-2">
                DATE OF BIRTH<span className="text-red-400"> *</span>
              </p>
              <button
                className="btn bg-white btn-sm w-2/3 text-black rounded-none"
                onClick={() => {
                  setIsOpen1(true);
                }}
              >
                {dateOfBirth?.toLocaleDateString()}
              </button>
              <DatePicker
                isOpen={isOpen1}
                onChange={(date) => setDateOfBirth(date)}
                onClose={() => setIsOpen1(false)}
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
            <div className="w-2/3">
              <p className="mt-2">
                PASSPORT ISSUE DATE<span className="text-red-400"> *</span>
              </p>
              <button
                className="btn bg-white btn-sm w-2/3 text-black rounded-none"
                onClick={() => {
                  setIsOpen2(true);
                }}
              >
                {issueDate?.toLocaleDateString()}
              </button>
              <DatePicker
                isOpen={isOpen2}
                onChange={(date) => setIssueDate(date)}
                onClose={() => setIsOpen2(false)}
                defaultValue={new Date(2022, 8, 8)}
                minDate={new Date(2022, 10, 10)}
                maxDate={new Date(2023, 0, 10)}
                headerFormat="DD, MM dd"
              />
            </div>
            <div className="w-2/3">
              <p className="mt-2">
                PASSPORT EXPIRY DATE<span className="text-red-400"> *</span>
              </p>
              <button
                className="btn bg-white btn-sm w-2/3 text-black rounded-none"
                onClick={() => {
                  setIsOpen3(true);
                }}
              >
                {expiryDate?.toLocaleDateString()}
              </button>
              <DatePicker
                isOpen={isOpen3}
                onChange={(date) => setExpiryDate(date)}
                onClose={() => setIsOpen3(false)}
                defaultValue={new Date(2022, 8, 8)}
                minDate={new Date(2022, 10, 10)}
                maxDate={new Date(2023, 0, 10)}
                headerFormat="DD, MM dd"
              />
            </div>
          </div>
          <section className="py-4">
            <h2 className="text-3xl text-bold">Contact Information</h2>
            <hr />
            <div className="flex flex-col mb-6">
              <div className="flex justify-start items-end gap-6">
                <div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <p className="label-text">
                        EMAIL FOR RECEIVE YOUR E-VISA
                        <span className="text-red-400">*</span>
                      </p>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      required
                      className="input input-bordered w-full max-w-md"
                    />
                    <label className="label">
                      <p className="label-text font-bold">ENTER EMAIL</p>
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="email"
                      name="confirmEmail"
                      required
                      className="input input-bordered w-full max-w-md"
                    />
                    <label className="label">
                      <p className="label-text font-bold">CONFIRM EMAIL</p>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="label">
                  <p className="label-text">
                    ADDRESS <span className="text-red-400">*</span>
                  </p>
                </label>
                <textarea
                  name="fullAddress"
                  required
                  className="textarea textarea-bordered textarea-md w-full max-w-md"
                ></textarea>
              </div>
            </div>
          </section>
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
