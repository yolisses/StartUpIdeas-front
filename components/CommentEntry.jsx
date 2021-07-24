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
        console.log(retrieveToken)
        console.log(retrieveToken())
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
        console.log('enter press')
        console.log(e)
        console.log(text)
        if (/^\s*$/.test(text)) {
            return
        }
        sendComment()
        setText('')
        e.target.blur()
        if (props.sendCallback)
            props.sendCallback(text)
    }

    return <div className={style.entry}>
        {/* <img src="https://github.com/yowlisses.png" alt="Yowlisses" className="round" /> */}
        {isAuthenticated() ?
            <div>
                <TextInput
                    value={text}
                    placeholder="Give some comment"
                    onChange={e => setText(e.target.value)}
                    singleLine={true}
                    onEnterPress={onEnterPress}
                />
                <div className="little-instruction">Press enter to publish</div>
            </div>
            :
            <div className={style.fake_input}>
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