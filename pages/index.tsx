import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import InputForm from '../components/InputForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Investment Calculator</title>
        <meta name="description" content="A calculator for financial investments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className="mb-8 text-6xl text-teal-500 dark:text-teal-300 font-bold">WealthCraft</h1>
        <InputForm />
      </main>
    </>
  )
}
