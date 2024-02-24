import { useState } from "react";
import "./addEmployeeForm.css";

function AddEmployeeForm() {
  const [formData, setFormData] = useState({
    profilePicture: "",
    name: "",
    email: "",
    gender: "",
    hobbies: [],
    education: [],
    experience: [],
    skills: [],
  });
  return (
    <div className="employee-add__details">
      <span className="employee-add__title">Fill the Employee Details</span>
      <form>
        <div className="flex-row gap-7 ">
          <h2>Personal Details :- </h2>

          <aside className="flex-column content-start">
            <input type="url" placeholder="Image Url" />
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />

            <label className="width-100">
              <select className="gender" name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <div className="flex-column">
              Hobbies:
              <div className="flex-row gap-1">
                <label className="flex-row">
                  <input type="checkbox" />
                  <span className="span">Reading</span>
                </label>
                <label className="flex-row">
                  <input type="checkbox" />
                  <span className="span">Writing</span>
                </label>
                <label className="flex-row">
                  <input type="checkbox" />
                  <span className="span">Drawing</span>
                </label>
                <label className="flex-row">
                  <input type="checkbox" />
                  <span className="span">Sports</span>
                </label>
                <label className="flex-row">
                  <input type="checkbox" />
                  <span className="span">Music</span>
                </label>
              </div>
            </div>
          </aside>
        </div>
        <hr />
        <div className="flex-row gap-7 ">
          <h2>Education :-</h2>

          <aside></aside>
        </div>
      </form>
    </div>
  );
}

export { AddEmployeeForm };
