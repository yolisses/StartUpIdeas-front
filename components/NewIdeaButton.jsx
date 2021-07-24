import { useContext } from "react";
import { isAuthenticated } from "../contexts/auth";
import { ModalContext } from "../contexts/ModalContext";
import { LoginModal } from "./LoginModal";

import style from '/styles/NewIdeaButton.module.css'

import Link from "next/link";

export function NewIdeaButton() {

    const modal = useContext(ModalContext);

    if (isAuthenticated()) {
        return <Link href="/new_idea">
            <button className={style.button}>
                <span className="material-icons">add</span>
                <span>Add new idea</span>
            </button>
        </Link>
    } else {
        return <button className="btn-strong"
            onClick={() => {
                modal.showModal(
                    <LoginModal redirect="/new_idea" history={history} />
                );
            }}>
            <span className="material-icons">add</span>
            <span>Add new idea</span>
        </button>
    }
}