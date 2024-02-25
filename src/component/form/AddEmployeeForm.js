import { useState } from "react";
import "./addEmployeeForm.css";

function AddEmployeeForm() {
  const [formData, setFormData] = useState({
    profilePicture: "",
    name: "",
    email: "",
    gender: "",
    hobbies: [],
    education: [{ institute: "", pass_out_year: "" }],
    skills: [{ name: "", experience: "" }],
    experience: [
      {
        company: "",
        project: "",
        role: "",
        duration_from: "",
        duration_to: "",
      },
    ],
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

          <aside className="flex-column content-start gap-1 ">
            {formData.education.map((edu, index) => {
              return (
                <div className="width-100">
                  <div>
                    <input
                      type="text"
                      placeholder="Name of School/College/Institute"
                    />
                    <input type="number" placeholder="Pass out year" />
                  </div>
                  {index !== 0 && <button type="button">Remove</button>}
                </div>
              );
            })}

            <div>
              <button type="button">Add Education</button>
            </div>
          </aside>
        </div>

        <hr />

        <div className="flex-row gap-7 ">
          <h2>Skills :-</h2>

          <aside className="flex-column content-start gap-1 ">
            {formData.skills.map((edu, index) => {
              return (
                <div className="width-100">
                  <div>
                    <input type="text" placeholder="Skill Name" />
                    <input type="number" placeholder="Experience" />
                  </div>
                  {index !== 0 && <button type="button">Remove</button>}
                </div>
              );
            })}

            <div>
              <button type="button">Add Skill</button>
            </div>
          </aside>
        </div>

        <hr />

        <div className="flex-row gap-7 ">
          <h2>Experience :-</h2>

          <aside className="flex-column content-start gap-1 ">
            {formData.experience.map((edu, index) => {
              return (
                <div className="width-100">
                  <div>
                    <input type="text" placeholder="Company Name" />
                    <input type="text" placeholder="Project Name" />
                    <input type="text" placeholder="Role" />
                    <input
                      type="number"
                      placeholder="Start Date (e.g., Jan 2021)"
                    />
                    <input
                      type="number"
                      placeholder="End Date (e.g., Nov 2021)"
                    />
                  </div>
                  {index !== 0 && <button type="button">Remove</button>}
                </div>
              );
            })}

            <div>
              <button type="button">Add Experience</button>
            </div>
          </aside>
        </div>

        <hr />

        <div className="flex-row content-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export { AddEmployeeForm };
