import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import loggedinNavBar from './loggedinNavbar';
import { openModal } from '../../../actions/modal_actions';
import { getProjects } from '../../../util/project_util';

const mapStateToProps = state => 
({
    currentUser: state.entities.users[state.session.id],
    projects: state.entities.projects,
    userId: state.session.id,
});

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        getProjects: project => getProjects(project),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(loggedinNavBar);