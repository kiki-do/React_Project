import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toogleIsProccessing,
  getFriends,
} from '../../redux/friendsReducer';
import { getUsersFriends } from '../../api/api';
import Friends from './Friends';
import Preloader from '../common/Preloader/Preloader';
import { Navigate } from 'react-router-dom';

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    if (!this.props.isAuth) return <Navigate to={'/login'} />;
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends
          totalFriendsCount={this.props.totalFriendsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          friends={this.props.friends}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toogleIsFetching={this.props.toogleIsFetching}
          toogleIsProccessing={this.props.toogleIsProccessing}
          isProccessing={this.props.isProccessing}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    isFetching: state.friendsPage.isFetching,
    isProccessing: state.friendsPage.isProccessing,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toogleIsProccessing,
  getUsers: getFriends,
})(FriendsContainer);
