import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['projects'])
)(ProjectDetails);

/*
const mapStateToProps = (state) => {
     return {
          project: state.firestore.data[project] && state.firestore.data.project
          // Not state.firestore.ordered as a single project document will be fetched so technically there is no order needed.
          // If you still want state.firestore.ordered, you can try the following:        
          // project: state.firestore.ordered.project[0]
          // But be aware that ordered will have just one document so you will need extra [0] 
     }
}

export default compose(
     connect(
          mapStateToProps
     ),
     firestoreConnect(props => {

          // console.log("firestoreConnect props are the same that are passed to the component, ", props);
          return [
               { collection: "projects", doc: props.match.params.id, storeAs: "project" },
          ];
     })
)(Quiz);
*/
