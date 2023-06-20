import Image from 'next/image';
import style from '../styles/meetup.module.scss';
import styles from '../styles/page.module.scss'

export default function Meet() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Log out
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