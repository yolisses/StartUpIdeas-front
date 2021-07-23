import { isAuthenticated } from '../contexts/auth'
import style from "/styles/Header.module.css";
// import { SearchBox } from './SearchBox'

import Image from 'next/image';

// import { ModalContext } from "../components/ModalContext"
import { useContext } from 'react';

import { LoginModal } from './LoginModal';

import Link from 'next/link'


// import { UserMenu } from './UserMenu';

import { NewIdeaButton } from './NewIdeaButton';
import { useForceUpdate } from '../contexts/forceUpdate';

export default function Header() {

    // const modal = useContext(ModalContext);
    useForceUpdate()

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
                <div className="center-v justify-end full-width">
                    {!isAuthenticated() && <>
                        <button className="little-login-button"
                            onClick={() => {
                                modal.showModal(
                                    <LoginModal></LoginModal>
                                );
                            }}
                        >Login</button>
                        <button className="little-login-button"
                            onClick={() => {
                                modal.showModal(
                                    <LoginModal signIn={true}></LoginModal>
                                );
                            }}
                        >Sign in</button> </>
                    }
                    {isAuthenticated() &&
                        <>
                            {
                                window.location.pathname !== '/new_idea' &&
                                <NewIdeaButton />
                            }
                            <div className="flex-v">
                                <UserMenu />
                            </div>
                        </>
                    }
                </div>
            </header>
        </>
    )
}