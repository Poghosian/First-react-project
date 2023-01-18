import React from "react"
import s from './Dialogs.module.css'

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    asdasdas
                </div>
                <div className={s.dialog}>
                    asdasdas
                </div>
                <div className={s.dialog}>
                    asdasdas
                </div>
                <div className={s.dialog}>
                    asdasdas
                </div>
                <div className={s.dialog}>
                    asdasdas
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <div className={s.messageImg}>
                        asdasd
                    </div>
                    <div className={s.messageText}>
                        afafasf
                    </div>
                </div>
                <div className={s.message}>
                    <div className={s.messageImg}>
                        afasfaf
                    </div>
                    <div className={s.messageText}>
                            asdasdasd
                    </div>
                </div>
                <div className={s.message}>
                    <div className={s.messageImg}>
                            asdasdasdasd
                    </div>
                    <div className={s.messageText}>
                        asdasdasd
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs