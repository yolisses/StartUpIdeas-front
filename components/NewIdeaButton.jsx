import { useContext } from "react";
import { isAuthenticated } from "../contexts/auth";
import { ModalContext } from "../contexts/ModalContext";
import { LoginModal } from "./LoginModal";

export function NewIdeaButton() {

    const modal = useContext(ModalContext);


    const content = <>
        <span className="material-icons">add</span>
        <span>Add new idea</span>
    </>

    if (isAuthenticated()) {
        return <button className="btn-strong">
            {content}1
        </button>
    } else {
        return <button className="btn-strong"
            onClick={() => {
                modal.showModal(
                    <LoginModal redirect="/new_idea" history={history} />
                );
            }}>
            {content}
        </button>
    }
}