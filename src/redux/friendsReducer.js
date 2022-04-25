import { getUsersFriends, getUsersFriendsFollow, getUsersFriendsUnfollow } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_PROCCESSING = 'TOOGLE_IS_PROGRESSING';

let initialState = {
  friends: [],
  pageSize: 25,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: false,
  isProccessing: false,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friends: state.friends.map((u) => {
          if (u.id === action.friendsId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map((u) => {
          if (u.id === action.friendsId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, friends: [...action.friends] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_COUNT:
      return { ...state, totalFriendsCount: action.count };

    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOOGLE_IS_PROCCESSING:
      return { ...state, isProccessing: action.isProccessing };

    default:
      return state;
  }
};

export const followSuccess = (friendsId) => {
  return { type: FOLLOW, friendsId };
};

export const unfollowSuccess = (friendsId) => {
  return { type: UNFOLLOW, friendsId };
};

export const setUser = (friends) => {
  return { type: SET_USERS, friends };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalCount = (totalFriendsCount) => {
  return { type: SET_TOTAL_COUNT, count: totalFriendsCount };
};

export const toogleIsFetching = (isFetching) => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};

export const toogleIsProccessing = (isProccessing) => {
  return { type: TOOGLE_IS_PROCCESSING, isProccessing };
};

export const getFriends = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toogleIsFetching(true));
    getUsersFriends(currentPage, pageSize).then((response) => {
      dispatch(toogleIsFetching(false));
      dispatch(setUser(response.data.items));
      dispatch(setTotalCount(response.data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    getUsersFriendsFollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    getUsersFriendsUnfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
    });
  };
};

export default friendsReducer;
