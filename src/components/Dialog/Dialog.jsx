import React from "react";
import s from './Dialog.module.css'

const Dialog = (props) => {
    return(
        <div className={s.dialog}>
            <div className={s.content}>
                <div className={s.users}>
                    Dialogs
                    <div className={s.users__name}>Andrew</div>
                    <div className={s.users__name}>Dmitriy</div>
                    <div className={s.users__name}>Sasha</div>
                    <div className={s.users__name}>Sveta</div>
                    <div className={s.users__name}>Valera</div>
                    <div className={s.users__name}>Viktor</div>
                    <div className={s.users__name}>This is list item</div>
                    <div className={s.users__name}>Another list item</div>
                    <div className={s.users__name}></div>
                    <div className={s.users__name}></div>
                </div>
            </div>
        </div>
    )
};

export default Dialog;