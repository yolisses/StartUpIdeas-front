
import { api } from "../services/api";

import { GoogleLogin } from 'react-google-login'
import { storeUserData } from "../contexts/auth";

import style from "../styles/LoginModal.module.css"
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import { useForceUpdate } from "../contexts/forceUpdate";

export function LoginModal(props) {
    const word = props.signIn ? "Sign in" : "Login"

    const modal = useContext(ModalContext);
    const { forceUpdate } = useForceUpdate();
    console.log({ forceUpdate })

    const responseGoogle = (res) => {
        console.log('google', res.tokenId);
        api.post('/login', { token: res.tokenId })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    storeUserData(res.data)
                    modal.closeModal()
                    forceUpdate()
                    if (props.redirect) {
                        console.log('redireciona para ' + props.redirect)
                        // props.history.push(props.redirect)
                    }
                }
            })
    }


    return (
        <div className={style.modal}>
            <h1>{word}</h1>
            <GoogleLogin
                id="google-button"
                clientId="418682635969-4hldgfuc6r8b3d9baaaapkbpblnfj5o8.apps.googleusercontent.com"
                buttonText={word + " with Google"}
                onSuccess={responseGoogle}
            />
        </div>
    )
}