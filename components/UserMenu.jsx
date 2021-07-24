import { useEffect, useState } from "react"
import { deleteToken } from "../contexts/auth"
import { useForceUpdate } from "../contexts/forceUpdate"
import style from "/styles/UserMenu.module.css"

import Link from "next/link"
import Image from 'next/image';

let func = () => { }
function hardCore() {
    func()
}

export default function UserMenu(props) {
    const [open, setOpen] = useState(false)
    const { forceUpdate } = useForceUpdate()

    func = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
            document.addEventListener('click', hardCore)
            if (window.screen.width <= 411)
                document.querySelector('body').style.overflowY = "hidden"
        } else {
            document.removeEventListener('click', hardCore)
            document.querySelector('body').style.overflowY = "auto"
        }
    }, [open])


    return <div className="flex-v">
        <Image
            src='/images/user.svg'
            alt='User'
            width={40}
            height={40}
            style={{ display: 'inline' }}
            onClick={() => { setOpen(!open) }}
            className={style.user_button}
        />
        {open &&
            <>
                <div className="paper-like" id={style.menu}>
                    <Link href="/config">
                        <div className={style.item}>
                            <span className="material-icons">settings</span>
                            <div>Config</div>
                        </div>
                    </Link>
                    <hr />
                    <div className={style.item} onClick={() => { deleteToken(); forceUpdate() }}>
                        <span className="material-icons">logout</span>
                        <div>Logout</div>
                    </div>
                </div>
                <div className=" cover-screen"
                    id={style.overlay}
                />
            </>}
    </div>

}