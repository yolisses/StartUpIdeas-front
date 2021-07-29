
import { api } from "../services/api";

import { GoogleLogin } from 'react-google-login'

import style from "../styles/LoginModal.module.css"
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";

import { useRouter } from 'next/router'
import { useUser } from "../contexts/AuthContext";

export function LoginModal(props) {
    const word = props.signIn ? "Sign in" : "Login"

    const router = useRouter()

    const modal = useContext(ModalContext);

    const { setUser, setToken } = useUser()

    const responseGoogle = (res) => {
        api.post('/login', { token: res.tokenId })
            .then(res => {
                if (res.status === 200) {
                    const { id, name, token } = res.data
                    setUser({ id, name })
                    setToken(token)
                    modal.closeModal()
                    if (props.redirect) {
                        router.push(props.redirect)
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