const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING"


let initialState = {
    friends: [],
    pageSize: 25,
    totalFriendsCount: 0,
    currentPage:1,
    isFetching: false,
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

        case SET_TOTAL_COUNT:
            return {...state, totalFriendsCount: action.count}

        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const follow = (friendsId) => {
    return {type: FOLLOW, friendsId}
}

export const unfollow = (friendsId) => {
    return {type: UNFOLLOW, friendsId}
}


export const setUser = (friends) => {
    return {type: SET_USERS, friends}
}   

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}  

export const setTotalCount = (totalFriendsCount) => {
    return {type: SET_TOTAL_COUNT, count: totalFriendsCount}
} 

export const toogleIsFetching = (isFetching) => {
    return {type: TOOGLE_IS_FETCHING, isFetching}
} 

export default friendsReducer;