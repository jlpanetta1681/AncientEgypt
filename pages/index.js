import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="All things mythology related" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mythopedia!
        </h1>

      <Image 
      src='/glyphs.jpg'
      alt='glyphs'
      height={250}
      width={250}
      />
      
         

      

         
        <div className={styles.grid}>
          <a href="/GodsIndex" className={styles.card}>
            <h2>List of the gods &rarr;</h2>
            <p>Find in-depth information about what this weeks featured god is</p>
            !
          </a>

          <a href="/Heiroglyphics" className={styles.card}>
            <h2>Learn the words &rarr;</h2>
            <p>Learn about egyptian culture and communication with games and quizzes!</p>
          </a>

          <a
            href="http://localhost:3000//GodsIndex"
            className={styles.card}
          >
            <h2>Gallery&rarr;</h2>
            <p>Discover some of the coolest mythic imagery around in our user submitted gallery.</p>
          </a>

          <a
            href="http://localhost:3000//GodsIndex"
            className={styles.card}
          >
            <h2>Connect &rarr;</h2>
            <p>
              Instantly connect with other like minded collectors teachers or just or history buffs..
              
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Lucas Panetta
          Built by Cutting Edge Design.
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
