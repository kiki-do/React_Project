import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../../redux/profilePageReducer';
import { getUsersProfile } from '../../api/api';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    getUsersProfile().then((response) => {
      this.props.getProfile(response.data);
    });
  }
  render() {
    if (!this.props.isAuth) return <Navigate to={'/login'} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getProfile })(ProfileContainer);
