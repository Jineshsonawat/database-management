import { EmployeeList } from "./component/EmployeeList";
import { EmployeeInfo } from "./component/EmployeeInfo";
import "./component/employee.css";

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

function Home() {
  // function postData() {
  //   const post = axios.post(
  //     "https://60d5a2c2943aa60017768b01.mockapi.io/candidate",
  //     data
  //   );
  //   console.log(post);
  // }

  return (
    <div>
      <header className="header">
        {/* <button onClick={postData}>Post</button> */}
        <h1>Employee Database Management</h1>
        <button className="add-employee">Add Employee</button>
      </header>

      <div className="employee">
        <EmployeeList />
        <EmployeeInfo />
      </div>
    </div>
  );
}

export { Home };
