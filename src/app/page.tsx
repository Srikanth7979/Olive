'use client';


import Image from 'next/image'
import styles from './styles/page.module.scss'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'
import axios from 'axios'

export default function Home() {

  const router = useRouter();

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

  return (
    <main className={styles.main}>
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

      <div className={styles.center}>
        <p>Learn web3 concepts for free in a 3-weeks intensive webinar</p>
        <p>Meet with top developers in the web3 space and network remotely.</p>

        <p onClick={handleAuth}>
          Meet the speakers
          <span>-&gt;</span>
        </p>
      </div>
    </main>
  )
}
