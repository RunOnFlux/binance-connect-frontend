import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomePage } from '../components/Home/home'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Binance Connect</title>
        <meta name="description" content="Binance connect | Flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <HomePage/>
      </main>
    
    </div>
  )
}
