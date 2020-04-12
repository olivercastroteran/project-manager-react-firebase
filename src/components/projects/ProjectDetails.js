import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            expedita nesciunt nulla, odit consequuntur fugiat eos corporis
            praesentium et. Porro saepe sunt error laborum iusto impedit
            voluptatum ipsa reprehenderit quas!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Oliver CT</div>
          <div>11th April, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
