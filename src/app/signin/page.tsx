'use client';

import Image from 'next/image'
import style from '../styles/signin.module.scss'
import styles from '../styles/page.module.scss'
import { useState, useEffect, CSSProperties } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import DotLoader from "react-spinners/DotLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
    position: 'absolute',
    top: 400,
};

export default function Signin() {

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const datum = {
        email: email,
        password: password,
    }

    const dataP = JSON.stringify(datum)

    const handleAuth = async () => {
        const accesstoken = localStorage.getItem('token');
        const refreshtoken = Cookies.get('userAccess_TT');

        if (accesstoken && refreshtoken || accesstoken && !refreshtoken) {
            // console.log(accesstoken);
            axios.get('https://oliveweb3.cyclic.app/user/verify', {
                headers: {
                    'Authorization': `Bearer ${accesstoken}`
                }
            }).then((res) => {

                if (res.status == 200) {
                    // console.log(res.data);
                    const expirationTime2 = 60 * 5 * 1000;
                    const expirationTimestamp2 = new Date().getTime() + expirationTime2;
                    const expirationDate2 = new Date(expirationTimestamp2);

                    Cookies.set('userAccess_TT', res.data, { expires: expirationDate2 });
                    router.push('/meetup');
                }

            })
                .catch((err) => {
                    // console.log(err);
                    router.push('/signin');
                    throw new Error('Erorr:', err)
                    
                });

        } else if (!accesstoken && !refreshtoken) {
            router.push('/signin');
        }
    }

    const handleSignin = async (e: any) => {
        e.preventDefault();

        setLoading(true);
        console.log(loading);

        axios.post('https://oliveweb3.cyclic.app/user/signin', dataP, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            setLoading(false);

            if (res.status == 200) {
                console.log(res.data.refreshToken, res.data.accessToken);
                const expirationTime = 7 * 24 * 60 * 60 * 1000;
                const expirationTime2 = 60 * 5 * 1000;
                const expirationTimestamp2 = new Date().getTime() + expirationTime2;
                const expirationDate2 = new Date(expirationTimestamp2);

                // Store the accesstoken and its expiration date in local storage
                localStorage.setItem('token', res.data.accessToken);
                // localStorage.setItem('tokenExpiration', expirationTime.toString());

                // Store the refreshtoken and its expiration date in cookies
                Cookies.set('userAccess_TT', res.data.refreshToken, { expires: expirationDate2 });

                router.push('/meetup');
            }

        })
            .catch((err) => {
                console.log(err);
                setLoading(false)
                if(err.response.data.statusCode == 400){
                    setError('Please fill out the fields appropriately.')
                }else{
                    setError(err.response.data.message);
                }
                
                setTimeout(() => {
                    setError('');
                }, 3500);

            });

    };


    return (
        <main className={style.Main}>
            <div className={styles.description}>
                <p onClick={handleAuth}>
                    Get started
                </p>
                <div>
                    <a
                        href="/"
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
                    <div className={style.error}>{error}</div>
                    <input required type='email' id='email' name='email' onChange={handleEmailChange} placeholder='email' />
                    <input required type={showPassword ? "text" : "password"} onChange={handlePasswordChange} id="pswrd" name="pswrd" pattern="[a-z0-9]{1,15}" placeholder='password' />
                    <input
                        id='showP'
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleTogglePassword}
                    />
                    <button onClick={handleSignin} type="submit">Submit</button>
                </form>
                <p className={style.alt}>Have an account? <a href='signup'>Sign up</a></p>
            </div>
            <DotLoader
                color='#e281e2'
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            <div className={style.center}></div>
        </main>
    )

}