'use client';

import Image from 'next/image'
import style from '../styles/signin.module.scss'
import styles from '../styles/page.module.scss'
import { useState, useEffect, useRef } from "react";

export default function Signin() {

    const [error, setError] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const ref = useRef(null);
    useEffect(() => {

    }, [])

    return (
        <main className={style.Main}>
            <div className={styles.description}>
                <p>
                    Get started
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Olive
                        <Image
                            src="/leafcom.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={50}
                            height={54}
                            priority
                        />
                    </a>
                </div>
            </div>
            <div>
                <p className={style.anchor}>Sign in with Olive</p>
                <form className={style.formDiv} method='post'>
                    <div className="emailerror">{error}</div>
                    <input required type='email' id='email' name='email' placeholder='email' />
                    <input required type={showPassword ? "text" : "password"} id="pswrd" name="pswrd" pattern="[a-z0-9]{1,15}" placeholder='password' />
                    <input
                        id='showP'
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleTogglePassword}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className={style.center}></div>
        </main>
    )

}