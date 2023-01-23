import React from "react"
import s from './../Dialogs.module.css'


const Message = (props) => {
    return(
        <div className={s.message}>
            <div className={s.messageImg}>
                IMG
            </div>
            <div className={s.messageText}>
                {props.message}
            </div>
        </div>
    )
}

export default Message