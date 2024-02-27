import { Link } from "react-router-dom";
import { useData } from "../../context/DatabaseContext";

function EmployeeList() {
  const {
    userDetails,
    selectedData,
    setSelectedData,
    deleteUserDetail,
    setShowEdit,
  } = useData();

  return (
    <div className="employee__list">
      <span className="employee__list--title">Employee List</span>
      <div className="overflow-y">
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
              <Link
                to={`/candidate/${id}`}
                className="employee__list--link flex-1"
              >
                <strong
                  onClick={() => (setSelectedData(user), setShowEdit(false))}
                  className="name"
                >
                  {name}
                </strong>
              </Link>
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
  );
}

export { EmployeeList };
