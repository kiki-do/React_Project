import { connect } from "react-redux";
import { followedActionCreator, unfollowedActionCreator,    setUserActionCreator, setCurrentPageActionCreator } from "../../redux/friendsReducer";
import FriendsC from "./FriendsC";

let mapStateToProps = (state) =>{
    return{
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage, 
        totalFriendsCount:state.friendsPage.totalFriendsCount
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
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsC)