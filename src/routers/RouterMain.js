import { Route, Routes } from "react-router-dom";
import { EmployeeList } from "../component/employee/EmployeeList.js";
import "../component/employee/employee.css";
import { EmployeeInfo } from "../component/employee/EmployeeInfo.js";
import { useData } from "../context/DatabaseContext.js";

// import axios from "axios";

// const data = {
//   profile_picture: "https://cdn-icons-png.flaticon.com/512/0/93.png",
//   name: "Manoj",
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
//       company: "Buisness",
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

function RouterMain() {
  // function postData() {
  //   const post = axios.post(
  //     "https://60d5a2c2943aa60017768b01.mockapi.io/candidate",
  //     data
  //   );
  //   console.log(post);
  // }

  const { setIsUserLoggedIn } = useData();

  return (
    <div>
      {/* <button onClick={postData}>Post</button> */}
      {setIsUserLoggedIn && (
        <header className="header">
          <h1>Employee Database Management</h1>
          <button className="add-employee">Add Employee</button>
        </header>
      )}
      <div className="employee">
        {setIsUserLoggedIn && <EmployeeList />}
        <Routes>
          <Route path="/candidate/:id" element={<EmployeeInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export { RouterMain };
