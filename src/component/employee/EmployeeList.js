import { Link } from "react-router-dom";
import { useData } from "../../context/DatabaseContext";

function EmployeeList() {
  const { userDetails, selectedData, showUserDetail, deleteUserDetail } =
    useData();

  return (
    <div className="employee__list">
      <span className="employee__list--title">Employee List</span>
      <Link
        to={`/candidate/${selectedData.id}`}
        className="employee__list--link"
      >
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
      </Link>
    </div>
  );
}

export { EmployeeList };
