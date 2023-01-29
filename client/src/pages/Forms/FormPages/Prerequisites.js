import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const Prerequisites = () => {
  const { userForm, setUserForm } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserForm = { ...userForm };
    setUserForm(newUserForm);
    setTimeout(() => {
      navigate("/information");
    }, 100);
  };
  return (
    <div>
      <section>
        <ul className="steps w-full my-4">
          <li className="step step-primary">Choice of Nationality</li>
          <li className="step step-primary">Arrival Information</li>
          <li className="step step-primary">Prerequisites</li>
          <li className="step">Personal Information</li>
        </ul>
      </section>
      <hr />
      <section className="flex flex-col items-center justify-center py-4">
        <div className="w-2/3">
          <div>
            <div className="form-control">
              <label className="cursor-pointer label flex gap-2 justify-start">
                <input
                  type="checkbox"
                  className="checkbox rounded-none checkbox-success"
                />
                <span className="label-text bordered border-xl border-black bg-gray-300 px-2 py-1">
                  I am travelling for the purposes of tourism or business.
                </span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="cursor-pointer label flex gap-2 justify-start">
                <input
                  type="checkbox"
                  className="checkbox rounded-none checkbox-success"
                />
                <span className="label-text bordered border-xl border-black bg-gray-300 px-2 py-1">
                  I can prove that I hold a return ticket, hotel reservation and
                  at least 50 $ per each day of my stay.
                </span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="cursor-pointer label flex gap-2 justify-start">
                <input
                  type="checkbox"
                  className="checkbox rounded-none checkbox-success"
                />
                <span className="label-text bordered border-xl border-black bg-gray-300 px-2 py-1">
                  I have a round-trip ticket with Airlines.
                </span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="cursor-pointer label flex gap-2 justify-start">
                <input
                  type="checkbox"
                  className="checkbox rounded-none checkbox-success"
                />
                <span className="label-text bordered border-xl border-black bg-gray-300 px-2 py-1">
                  I hold a passport valid for at least 6 months from the date I
                  intend to enter Syria.
                </span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="cursor-pointer label flex gap-2 justify-start">
                <input
                  type="checkbox"
                  className="checkbox rounded-none checkbox-success"
                />
                <span className="label-text bordered border-xl border-black bg-gray-300 px-2 py-1">
                  I am below 20 or over 45 years old; or I have a valid
                  Supporting Document (Valid visa OR valid residence permit from
                  one of the Schengen Countries, USA, UK or Ireland). E-visas
                  are not accepted as supporting documents.
                </span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="cursor-pointer label flex gap-2 justify-start">
                <input
                  type="checkbox"
                  className="checkbox rounded-none checkbox-success"
                />
                <span className="label-text bordered border-xl border-black bg-gray-300 px-2 py-1">
                  I confirm that I meet each and every one of the conditions
                  listed above.
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="p-6 text-center">
        <button
          onClick={handleSubmit}
          className="btn submit bg-green-500 rounded-none border-none"
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default Prerequisites;
