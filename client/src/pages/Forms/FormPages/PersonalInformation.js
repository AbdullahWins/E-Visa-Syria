import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const PersonalInformation = () => {
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
          <li className="step step-primary">Personal Information</li>
        </ul>
      </section>
      <hr />
      <section className="p-6">
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

export default PersonalInformation;
