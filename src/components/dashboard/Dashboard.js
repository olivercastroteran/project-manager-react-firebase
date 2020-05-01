import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps)
)(Dashboard);

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
