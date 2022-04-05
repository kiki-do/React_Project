import React from "react";
import s from './Friends.module.css'
import * as axios from 'axios'

const Friends  = (props) => {
    if(props.friends.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUser(response.data.items);

        })   
    }   
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
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
            </div>)
    }
    </div>
    )}

export default Friends;