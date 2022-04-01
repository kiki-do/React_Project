import React from "react";
import s from './Friends.module.css'

const Friends  = (props) => {
    return(
    <div>
        {
           props.friends.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} alt="" />
                </div>
                <div>
                    {u.followed ? <button className="" onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
            </div>)
    }
    </div>
    )}

export default Friends;