import style from "/styles/Header.module.css";
// import { SearchBox } from './SearchBox'

import Image from 'next/image';

import { useContext } from 'react';

import { LoginModal } from './LoginModal';

import Link from 'next/link'

import { NewIdeaButton } from './NewIdeaButton';
import UserMenu from './UserMenu';
import { ModalContext } from '../contexts/ModalContext';
import { useUser } from "../contexts/AuthContext";

export default function Header() {

    const modal = useContext(ModalContext);

    const { user } = useUser()

    return (
        <>
            <div className={style.spacer}></div>
            <header className={style.header}>
                <Link href="/">
                    <div className={style.logo}>
                        <Image
                            src='/images/logo-dark.svg'
                            alt='light bulb'
                            width={130}
                            height={40}
                        />
                    </div>
                </Link>
                {/* <SearchBox></SearchBox> */}
                <div className={style.end_wrapper}>
                    {!user && <>
                        <button className={style.login_button}
                            onClick={() => {
                                modal.showModal(
                                    <LoginModal></LoginModal>
                                );
                            }}
                        >Login</button>
                        <button className={style.login_button}
                            onClick={() => {
                                modal.showModal(
                                    <LoginModal signIn={true}></LoginModal>
                                );
                            }}
                        >Sign in</button> </>
                    }
                    {user &&
                        <>
                            {
                                window.location.pathname !== '/new_idea' &&
                                <NewIdeaButton />
                            }
                            <UserMenu />
                        </>
                    }
                </div>
            </header>
        </>
    )
}