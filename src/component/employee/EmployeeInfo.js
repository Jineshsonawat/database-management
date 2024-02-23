import { useData } from "../../context/DatabaseContext";

function EmployeeInfo() {
  const { selectedData, userDetails } = useData();

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

  return (
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
                  const { institute, degree, percentage, pass_out_year } = item;

                  return (
                    <div key={index} className="education__detail">
                      <strong>{index + 1}.</strong>
                      <span>
                        <span className="key">Degree </span>: {degree}.
                      </span>
                      <span>
                        <span className="key">Institute </span>: {institute}.
                      </span>
                      <span>
                        <span className="key">Percentage </span>: {percentage}
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
                        <span className="key">Experience </span>: {experience}.
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
  );
}

export { EmployeeInfo };
