import React from "react";
import s from './Dialog.module.css';
import Users from "./Users/Users";
import Message from "./Message/Message";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogsPageReducer";

const Dialog = (props) => {


    let messageElements =  props.state.messages.map(props => <Message message={props.message}/>);
    let dialogElements =  props.state.dialog.map(props => <Users name={props.name} id={props.id} />);
    let NewMessageElement = props.state.newMessageText;



    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onNewMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }


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
                   <div>
                       <textarea onChange={onNewMessageText} value={NewMessageElement}></textarea>
                    </div>
                   <div>
                       <button onClick={addMessage} className={s.btn}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialog;