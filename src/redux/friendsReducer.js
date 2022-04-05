const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


let initialState = {
    friends: [],
    pageSize: 5,
    totalFriendsCount: 20,
    currentPage:2,
}
    

const friendsReducer = (state=initialState, action) =>{
    switch(action.type){
        case FOLLOW: 
            return {...state, friends:state.friends.map(u => {
                if(u.id === action.friendsId) {
                    return {...u, followed: true}
                }
                return u;
            })
        }

        case UNFOLLOW:
            return {...state, friends:state.friends.map(u => {
                if(u.id === action.friendsId) {
                    return {...u, followed: false}
                }
                return u;
            })
        }

        case SET_USERS:
            return {...state, friends: [...action.friends]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}

export const followedActionCreator = (friendsId) => {
    return {type: FOLLOW, friendsId}
}

export const unfollowedActionCreator = (friendsId) => {
    return {type: UNFOLLOW, friendsId}
}


export const setUserActionCreator = (friends) => {
    return {type: SET_USERS, friends}
}   

export const setCurrentPageActionCreator = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}   

export default friendsReducer;