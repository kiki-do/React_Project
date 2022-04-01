const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


let initialState = {
    friends: [
        {id: 1, photoUrl: "https://sun9-38.userapi.com/impf/kEZoN0leykKAeghQGTk_TFt2mo7_eBbuDxDrWg/a4zgUsqKZ6U.jpg?size=867x867&quality=95&sign=edd8340edddc046be371362ff7cdd5cf&type=album", followed: false, fullname: 'Dmitriy', status: 'Hi how are you?',  location: {city: "Minsk", country: "Belarus"}},
        {id: 2, photoUrl: "https://sun9-38.userapi.com/impf/kEZoN0leykKAeghQGTk_TFt2mo7_eBbuDxDrWg/a4zgUsqKZ6U.jpg?size=867x867&quality=95&sign=edd8340edddc046be371362ff7cdd5cf&type=album", followed: true, fullname: 'Sasha', status: 'Hi how are you?',  location: {city: "Moscow", country: "Russia"}},
        {id: 3, photoUrl: "https://sun9-38.userapi.com/impf/kEZoN0leykKAeghQGTk_TFt2mo7_eBbuDxDrWg/a4zgUsqKZ6U.jpg?size=867x867&quality=95&sign=edd8340edddc046be371362ff7cdd5cf&type=album", followed: false, fullname: 'Andrew', status: 'Hi how are you?',  location: {city: "Kiev", country: "Ukraine"}},
    ]

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
            return {...state.friends, ...action.friends}
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

export default friendsReducer;