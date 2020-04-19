import React from "react";
import Moment from 'react-moment';

const Experience = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {experience.length > 0
        ? experience.map((exp, index) => (
            <div key={index}>
              <h3 className="text-dark">{exp.company}</h3>
              <p>
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {exp.current ? (<span>Current</span>) : <Moment format="YYYY/MM/DD">{exp.to}</Moment> }
              </p>
              <p>
                <strong>Position: </strong>{exp.title}
              </p>
              {exp.description && <p><strong>Description: </strong> <span>{exp.description}</span></p>}
            </div>
          ))
        : <h4>No experience added</h4>}
    </div>
  );
};

export default Experience;
