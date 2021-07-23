import { isAuthenticated } from "../contexts/auth"
import { useForceUpdate } from "../contexts/forceUpdate";
import { NewIdeaButton } from "./NewIdeaButton"

import style from '../styles/TopButtonWrapper.module.css'

export default function TopButtonWrapper() {

    useForceUpdate()

    return <>
        {!isAuthenticated() ?
            <div className={style.wrapper}>
                <NewIdeaButton />
            </div> :
            <></>
        }
    </>
}