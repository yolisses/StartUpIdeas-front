import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { LoginModal } from "./LoginModal";

import style from '/styles/NewIdeaButton.module.css'

import Link from "next/link";
import { useUser } from "../contexts/AuthContext";

export function NewIdeaButton() {

    const modal = useContext(ModalContext);
    const { user } = useUser()

    if (user) {
        return <Link href="/new_idea">
            <button className={style.button}>
                <span className="material-icons">add</span>
                <span>Add new idea</span>
            </button>
        </Link>
    } else {
        return <button className={style.button}
            onClick={() => {
                modal.showModal(
                    <LoginModal redirect="/new_idea" />
                );
            }}>
            <span className="material-icons">add</span>
            <span>Add new idea</span>
        </button>
    }
}