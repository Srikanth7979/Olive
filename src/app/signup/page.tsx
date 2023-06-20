'use client';

import style from '../styles/signup.module.scss'
import styles from '../styles/page.module.scss'
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";



export default function Signup() {

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handleFirstnameChange = (e: any) => {
        setFirstname(e.target.value);
    };

    const handleLastnameChange = (e: any) => {
        setLastname(e.target.value);
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
                    <p className={style.anchor}>Sign up with Olive</p>
                    <form className={style.formDiv} action='/user/signup' method='post'>
                        <div className="emailerror">{error}</div>
                        <input type="text" id="fname" name="name" required placeholder='firstname' />
                        <input type="text" id="lname" name="name" required placeholder='secondname' />
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