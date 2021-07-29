import { NewIdeaButton } from "./NewIdeaButton"

import style from '../styles/TopButtonWrapper.module.css'
import { useUser } from "../contexts/AuthContext";

export default function TopButtonWrapper() {

    const { user } = useUser()

    return <>
        {!user ?
            <div className={style.wrapper}>
                <NewIdeaButton />
            </div> :
            <div></div> //Very strange behaviour when use <></>
        }
    </>
}