import React from "react";
import s from './Message.module.css';

const Message = (props) => {
    return(
        <div>
            <div className={s.messages__user}>{props.message}</div>
        </div>
    )
}

export default Message;