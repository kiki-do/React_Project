import React from "react";
import s from './Dialog.module.css';
import Users from "./Users/Users";
import Message from "./Message/Message";

const Dialog = (props) => {
    
    let messageElements =  props.state.messages.map(props => <Message message={props.message} />) 

    let dialogElements =  props.state.dialog.map(props => <Users name={props.name} id={props.id} />) 


    return(
        // Исправить кол-во className - это не красиво удалить один из
        <div className={s.dialog}> 
            <div className={s.content}>
                <div className={s.users}>
                    <h1>Dialogs</h1>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                   {messageElements}
                </div>
            </div>
        </div>
    )
};

export default Dialog;