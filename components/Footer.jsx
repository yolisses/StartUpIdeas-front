import Link from "next/link"

import style from '../styles/Footer.module.css'

export default function Footer() {
    return <footer className={style.footer}>
        <Link href="/about">About</Link>
    </footer>
}