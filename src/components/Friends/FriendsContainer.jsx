import { connect } from "react-redux";
import { followedActionCreator, unfollowedActionCreator,    setUserActionCreator } from "../../redux/friendsReducer";
import Friends from "./Friends";

let mapStateToProps = (state) =>{
    return{
        friends: state.friendsPage.friends
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (friendsId) => {
            dispatch(followedActionCreator(friendsId))
        },

        unfollow: (friendsId) => {
            dispatch(unfollowedActionCreator(friendsId))
        },

        setUser: (friends) => {
            dispatch(setUserActionCreator(friends))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)