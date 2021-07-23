import { useContext, useState } from "react";
import { api } from "../services/api";

import { isAuthenticated, retrieveToken } from "../contexts/auth";

import { TextInput } from "./TextInput";

import style from "/styles/CommentEntry.module.css"
import { ModalContext } from "/contexts/ModalContext";


import { LoginModal } from "./LoginModal";
import { useForceUpdate } from "../contexts/forceUpdate";

export function CommentEntry(props) {
    useForceUpdate()

    const modal = useContext(ModalContext);

    const [text, setText] = useState('')

    const sendComment = () => {
        api.post(`/idea/${props.id}/comments`, { text },
            {
                headers:
                    { authorization: retrieveToken() }
            }).then(res => {
                if (props.addCallback)
                    props.addCallback(res)
            })
    }

    function onEnterPress(e) {
        sendComment()
        setText('')
        e.target.blur()
    }

    return <div className={style.entry}>
        {/* <img src="https://github.com/yowlisses.png" alt="Yowlisses" className="round" /> */}
        {isAuthenticated() ?
            <>
                <TextInput
                    value={text}
                    placeholder="Give some comment"
                    onChange={e => setText(e.target.value)}
                    singleLine={true}
                    onEnterPress={onEnterPress}
                />
                <div className="little-instruction">Press enter to publish</div>
            </>
            :
            <div className={style.login_button}>
                <button
                    onClick={() => {
                        modal.showModal(
                            <LoginModal />
                        );
                    }}
                >Login</button>
                <span>to comment</span>
            </div>
        }
        {/* {!user && <button onClick={signInWithGoogle}>Log in to comment</button>} */}
    </div>
}