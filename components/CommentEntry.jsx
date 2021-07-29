import { useContext, useState } from "react";
import { api } from "../services/api";

import { TextInput } from "./TextInput";

import style from "/styles/CommentEntry.module.css"
import { ModalContext } from "/contexts/ModalContext";

import { LoginModal } from "./LoginModal";
import { useUser } from "../contexts/AuthContext";

export function CommentEntry(props) {

    const { user, getToken } = useUser()

    const modal = useContext(ModalContext);

    const [text, setText] = useState('')

    const sendComment = () => {
        api.post(`/idea/${props.id}/comments`, { text },
            {
                headers:
                    { authorization: getToken() }
            }).then(res => {
                if (props.addCallback)
                    props.addCallback(res)
            })
    }

    function onEnterPress(e) {
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
        {user ?
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