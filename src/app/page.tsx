import Image from 'next/image'
import styles from './styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
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

       <div className={styles.center}>
        <p>Learn web3 concepts for free in a 3-weeks intensive webinar</p>
        <p>Meet with top developers in the web3 space and network remotely.</p>

        <p>
          Meet the speakers
          <span>-&gt;</span>
        </p>
      </div>
    </main>
  )
}
