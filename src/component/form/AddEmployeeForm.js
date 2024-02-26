import { useState } from "react";
import "./addEmployeeForm.css";

function AddEmployeeForm() {
  const [formData, setFormData] = useState({
    profile_picture: "",
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

  const {
    profile_picture,
    name,
    email,
    gender,
    hobbies,
    education,
    skills,
    experience,
  } = formData;

  console.log(formData);

  function handlePersonalDetails(event) {
    const { name, value } = event.target;
    console.log(event.target);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // if (profile_picture.length === 0) {
    //   setFormData((prev) => ({
    //     ...prev,
    //     profile_picture: "https://cdn-icons-png.flaticon.com/512/0/93.png",
    //   }));
    // }
  }

  function handleHobbies(e) {
    const { value } = e.target;
    let updatedHobbies = [...hobbies];

    if (updatedHobbies.includes(value)) {
      updatedHobbies = updatedHobbies.filter((hobby) => hobby !== value);
    } else {
      updatedHobbies.push(value);
    }

    setFormData((prev) => ({ ...prev, hobbies: updatedHobbies }));
  }

  function handleAdd(e) {
    const { value } = e.target;

    if (value === "education") {
      if (education.length < 10) {
        setFormData((prev) => ({
          ...prev,
          education: [...education, { institute: "", pass_out_year: "" }],
        }));
      }
    }

    if (value === "skill") {
      if (skills.length < 10) {
        setFormData((prev) => ({
          ...prev,
          skills: [...skills, { name: "", experience: "" }],
        }));
      }
    }

    if (value === "experience") {
      if (experience.length < 10) {
        setFormData((prev) => ({
          ...prev,
          experience: [
            ...experience,
            {
              company: "",
              project: "",
              role: "",
              duration_from: "",
              duration_to: "",
            },
          ],
        }));
      }
    }
  }

  function handleRemove(e, index) {
    const { value } = e.target;
    const list = [...formData[value]];

    list.splice(index, 1);

    setFormData((prev) => ({ ...prev, [value]: list }));
  }

  function handleDetails(e, index, key) {
    const { name, value } = e.target;
    const list = [...formData[key]];
    list[index][name] = value;

    setFormData((prev) => ({ ...prev, [key]: list }));
  }

  return (
    <div className="employee-add__details">
      <span className="employee-add__title">Fill the Employee Details</span>
      <form className="flex-column gap-2 overflow-y">
        <div className="flex-row gap-7 ">
          <h2>Personal Details :- </h2>

          <aside className="flex-column content-start">
            <input
              type="url"
              value={profile_picture}
              name="profile_picture"
              placeholder="Image Url"
              onChange={(e) => handlePersonalDetails(e)}
            />

            <input
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={(e) => handlePersonalDetails(e)}
              required
            />

            <input
              type="email"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(e) => handlePersonalDetails(e)}
              required
            />

            <label className="width-100">
              <select
                className="gender"
                value={gender}
                name="gender"
                onChange={(e) => handlePersonalDetails(e)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <div className="flex-column">
              Hobbies:
              <div className="flex-row gap-1">
                <label className="flex-row">
                  <input
                    type="checkbox"
                    onChange={(e) => handleHobbies(e)}
                    value="Reading"
                  />
                  <span className="span">Reading</span>
                </label>
                <label className="flex-row">
                  <input
                    type="checkbox"
                    onChange={(e) => handleHobbies(e)}
                    value="Writing"
                  />
                  <span className="span">Writing</span>
                </label>
                <label className="flex-row">
                  <input
                    type="checkbox"
                    onChange={(e) => handleHobbies(e)}
                    value="Drawing"
                  />
                  <span className="span">Drawing</span>
                </label>
                <label className="flex-row">
                  <input
                    type="checkbox"
                    onChange={(e) => handleHobbies(e)}
                    value="Sports"
                  />
                  <span className="span">Sports</span>
                </label>
                <label className="flex-row">
                  <input
                    type="checkbox"
                    onChange={(e) => handleHobbies(e)}
                    value="Music"
                  />
                  <span className="span">Music</span>
                </label>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex-row gap-7 ">
          <h2>Education :-</h2>

          <aside className="flex-column content-start gap-1 ">
            {formData.education.map((edu, index) => {
              return (
                <div key={index} className="width-100">
                  <div>
                    <h4 style={{ margin: "0", marginBottom: "1px" }}>
                      {index + 1}
                    </h4>
                    <input
                      type="text"
                      name="institute"
                      value={edu.institute}
                      onChange={(e) => handleDetails(e, index, "education")}
                      placeholder="Name of School/College/Institute"
                      required
                    />
                    <input
                      type="number"
                      name="pass_out_year"
                      value={edu.pass_out_year}
                      onChange={(e) => handleDetails(e, index, "education")}
                      placeholder="Pass out year"
                      required
                    />
                  </div>
                  {index !== 0 && (
                    <button
                      value="education"
                      onClick={(e) => handleRemove(e, index)}
                      type="button"
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}

            <div>
              <button
                value="education"
                onClick={(e) => handleAdd(e)}
                type="button"
              >
                Add Education
              </button>
            </div>
          </aside>
        </div>

        <div className="flex-row gap-7 ">
          <h2>Skills :-</h2>

          <aside className="flex-column content-start gap-1 ">
            {formData.skills.map((skill, index) => {
              return (
                <div key={index} className="width-100">
                  <div>
                    <h4 style={{ margin: "0", marginBottom: "1px" }}>
                      {index + 1}
                    </h4>
                    <input
                      type="text"
                      name="name"
                      value={skill.name}
                      onChange={(e) => handleDetails(e, index, "skills")}
                      required
                      placeholder="Skill Name"
                    />
                    <input
                      type="number"
                      name="experience"
                      value={skill.experience}
                      onChange={(e) => handleDetails(e, index, "skills")}
                      required
                      placeholder="Experience"
                    />
                  </div>
                  {index !== 0 && (
                    <button
                      value="skills"
                      onClick={(e) => handleRemove(e, index)}
                      type="button"
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}

            <div>
              <button value="skill" onClick={(e) => handleAdd(e)} type="button">
                Add Skill
              </button>
            </div>
          </aside>
        </div>

        <div className="flex-row gap-7 ">
          <h2>Experience :-</h2>

          <aside className="flex-column content-start gap-1 ">
            {formData.experience.map((exp, index) => {
              return (
                <div key={index} className="width-100">
                  <div>
                    <h4 style={{ margin: "0", marginBottom: "1px" }}>
                      {index + 1}
                    </h4>
                    <input
                      type="text"
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleDetails(e, index, "experience")}
                      required
                      placeholder="Company Name"
                    />
                    <input
                      type="text"
                      name="project"
                      value={exp.project}
                      onChange={(e) => handleDetails(e, index, "experience")}
                      required
                      placeholder="Project Name"
                    />
                    <input
                      type="text"
                      name="role"
                      value={exp.role}
                      onChange={(e) => handleDetails(e, index, "experience")}
                      required
                      placeholder="Role"
                    />
                    <input
                      name="duration_from"
                      value={exp.duration_from}
                      onChange={(e) => handleDetails(e, index, "experience")}
                      type="number"
                      required
                      placeholder="Start Date (e.g., Jan 2021)"
                    />
                    <input
                      name="duration_to"
                      value={exp.duration_to}
                      onChange={(e) => handleDetails(e, index, "experience")}
                      type="number"
                      required
                      placeholder="End Date (e.g., Nov 2021)"
                    />
                  </div>
                  {index !== 0 && (
                    <button
                      value="experience"
                      onClick={(e) => handleRemove(e, index)}
                      type="button"
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}

            <div>
              <button
                value="experience"
                onClick={(e) => handleAdd(e)}
                type="button"
              >
                Add Experience
              </button>
            </div>
          </aside>
        </div>

        <div className="flex-row content-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export { AddEmployeeForm };
