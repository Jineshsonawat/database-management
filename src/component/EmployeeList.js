import { useEffect, useState } from "react";
import "./employee.css";
import axios from "axios";

// const data = {
//   profile_picture: "https://cdn-icons-png.flaticon.com/512/0/93.png",
//   name: "Ravi",
//   address: "Bikaner",
//   phone: "9879879870",
//   email: "test.candidate@nonstopio.com",
//   gender: "Female",
//   hobbies: ["Reading", "Music"],
//   education: [
//     {
//       institute: "ABC School",
//       degree: "10th",
//       percentage: 99,
//       pass_out_year: 2010,
//     },
//     {
//       institute: "ABC School",
//       degree: "12th",
//       percentage: 99,
//       pass_out_year: 2012,
//     },
//   ],
//   skills: [
//     { name: "Java", experience: 4 },
//     {
//       name: "Java",
//       experience: 4,
//     },
//     {
//       name: "Java",
//       experience: 4,
//     },
//   ],
//   experience: [
//     {
//       company: "Self-Employed",
//       project: "Some prohect",
//       role: "SSE",
//       team_size: 4,
//       duration_from: "Jan 2021",
//       duration_to: "Nov 2021",
//     },
//     {
//       company: "ABC PVT LTD",
//       project: "Some prohect",
//       role: "SSE",
//       team_size: 4,
//       duration_from: "Jan 2021",
//       duration_to: "Nov 2021",
//     },
//     {
//       company: "ABC PVT LTD",
//       project: "Some prohect",
//       role: "SSE",
//       team_size: 4,
//       duration_from: "Jan 2021",
//       duration_to: "Nov 2021",
//     },
//   ],
//   id: "1",
// };

function EmployeeList() {
  const [userDetails, setUserDetails] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const value = await axios.get(
        "https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
      );
      setUserDetails(value.data);
      if (value.data.length) setSelectedData(value.data[0]);
    }
    fetchData();
  }, []);

  const {
    profile_picture,
    address,
    name,
    phone,
    email,
    gender,
    hobbies = [],
    skills = [],
    education = [],
    experience = [],
  } = selectedData;

  // function postData() {
  //   const post = axios.post(
  //     "https://60d5a2c2943aa60017768b01.mockapi.io/candidate",
  //     data
  //   );
  //   console.log(post);
  // }

  function showUserDetail(singleUserDetail) {
    setSelectedData(singleUserDetail);
  }

  async function deleteUserDetail(singleUserDetail, wholeData) {
    const selectedUserId = singleUserDetail.id;
    const deleteSelectedUserData = await axios.delete(
      `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${selectedUserId}`
    );

    const updatedData = wholeData.filter(({ id }) => id !== selectedUserId);
    if (updatedData.length === 0) {
      setSelectedData({});
    }

    if (selectedUserId === selectedData.id) {
      setSelectedData(updatedData[0]);
    }

    setUserDetails(updatedData);
  }

  return (
    <div>
      <header className="header">
        {/* <button onClick={postData}>Post</button> */}
        <h1>Employee Database Management</h1>
        <button className="add-employee">Add Employee</button>
      </header>

      <div className="employee">
        <div className="employee__list">
          <span className="employee__list--title">Employee List</span>
          <div>
            {userDetails.map((user) => {
              const { name, id } = user;
              return (
                <div
                  key={id}
                  className={
                    id === selectedData?.id
                      ? "employee__list--name selectedUser"
                      : "employee__list--name"
                  }
                >
                  <strong
                    onClick={() => showUserDetail(user)}
                    className="flex-1 name"
                  >
                    {name}
                  </strong>

                  <p
                    onClick={() => deleteUserDetail(user, userDetails)}
                    className="delete"
                  >
                    ❌
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="employee__info">
          <span className="employee__info--title">Employee Information</span>
          {userDetails.length === 0 ? (
            ""
          ) : (
            <div className="employee__info--detail">
              <div className="employee__info--personal-detail">
                <img src={profile_picture} alt="user pic" />
                <div style={{ padding: "1em" }}>
                  <p>
                    <strong>{name}</strong> ({gender})
                  </p>
                  <p>{address}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                </div>
              </div>

              <div className="employee__info--extra-detail">
                <div className="employee__info--other">
                  <div className="employee__info--education">
                    <strong>Education</strong>

                    {education.map((item, index) => {
                      const { institute, degree, percentage, pass_out_year } =
                        item;

                      return (
                        <div key={index} className="education__detail">
                          <strong>{index + 1}.</strong>
                          <span>
                            <span className="key">Degree </span>: {degree}.
                          </span>
                          <span>
                            <span className="key">Institute </span>: {institute}
                            .
                          </span>
                          <span>
                            <span className="key">Percentage </span>:{" "}
                            {percentage}
                            %.
                          </span>
                          <span>
                            <span className="key">Year </span>: {pass_out_year}.
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="employee__info--skills">
                    <strong>Skills</strong>
                    {skills.map((skill, index) => {
                      const { name, experience } = skill;

                      return (
                        <div key={index} className="skill__detail">
                          <strong>{index + 1}.</strong>
                          <span>
                            <span className="key">Name </span>: {name}.
                          </span>
                          <span>
                            <span className="key">Experience </span>:{" "}
                            {experience}.
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="employee__info--hobbies">
                    <strong>Hobbies : </strong>
                    {hobbies.map((hobby, index) => {
                      return hobbies.length - 1 === index ? (
                        <span key={index}>{hobby}.</span>
                      ) : (
                        <span key={index}>{hobby},</span>
                      );
                    })}
                  </div>
                </div>

                <div className="employee__info--experience">
                  <strong>Experience</strong>
                  {experience.map((experience, index) => {
                    const { company, role, project, team_size } = experience;

                    return (
                      <div key={index} className="experience__detail">
                        <strong>{index + 1}.</strong>
                        <span>
                          <span className="key">Company </span>: {company}.
                        </span>
                        <span>
                          <span className="key">Project </span>: {project}.
                        </span>
                        <span>
                          <span className="key">Role </span>: {role}.
                        </span>
                        <span>
                          <span className="key">Team-size </span>: {team_size}.
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { EmployeeList };