'use client';

import Image from 'next/image';
import style from '../styles/meetup.module.scss';
import styles from '../styles/page.module.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'
import { useEffect } from "react";


export default function Meet() {


    const router = useRouter();

    useEffect(() => {
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
                        console.log(res.data);
                        const expirationTime2 = 60 * 5 * 1000;
                        const expirationTimestamp2 = new Date().getTime() + expirationTime2;
                        const expirationDate2 = new Date(expirationTimestamp2);

                        Cookies.set('userAccess_TT', res.data, { expires: expirationDate2 });
                        router.push('/meetup');
                    }

                })
                    .catch((err) => {
                        console.log(err);
                        router.push('/signin');
                    });

            } else if (!accesstoken && !refreshtoken) {
                router.push('/signin');
            }
        }

        handleAuth()
    }, [])


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        Cookies.remove('userAccess_TT');
        router.push('/');
    }


    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p onClick={handleLogout}>
                    Log out
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

            <div className={style.anchor}>
                <p>Meet Our speakers</p>
            </div>

            <div className={style.grid}>
                <div>
                    <div className={style.imageDiv1}></div>
                    <p>Joan Salome</p>
                    <p>CTO Funds global</p>
                </div>

                <div>
                    <div className={style.imageDiv3}></div>
                    <p>Paula Walker</p>
                    <p>CFO Iridiscent global</p>
                </div>

                <div>
                    <div className={style.imageDiv2}></div>
                    <p>Sarah Laguana</p>
                    <p>CEO Health Finn</p>
                </div>

                <div>
                    <div className={style.imageDiv4}></div>
                    <p>Jane Makosa</p>
                    <p>CTO Virdil Inc.</p>
                </div>

                <div>
                    <div className={style.imageDiv5}></div>
                    <p>Thomas Connor</p>
                    <p>Web3 Now Plc</p>
                </div>

                <div>
                    <div className={style.imageDiv6}></div>
                    <p>Rebecca Sijuade</p>
                    <p>Push Protocol</p>
                </div>
            </div>


            <div className={styles.center}></div>
        </main>
    )
}