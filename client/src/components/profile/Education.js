import React from "react";
import Moment from "react-moment";

const Education = ({ profile: { education } }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {education.length > 0 ? (
        education.map(({
            _id,
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
        }) => (
          <div key={_id}>
            <h3>{school}</h3>
            <p>
              <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
              {current ? (
                <span>Current</span>
              ) : (
                <Moment format="YYYY/MM/DD">{to}</Moment>
              )}
            </p>
            <p>
              <strong>Degree: </strong>
              {degree}
            </p>
            <p>
              <strong>Field Of Study: </strong>
              {fieldofstudy}
            </p>
            {education && <p><strong>Education: </strong> <span>{description}</span></p>}
          </div>
        ))
      ) : (
        <h4>No education added</h4>
      )}
    </div>
  );
};

export default Education;
