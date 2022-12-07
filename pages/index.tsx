import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gymlink</title>
        <meta
          name='description'
          content='Gymlink is a social network for gyms and fitness enthusiasts, who want to meet new friends, or make meaningful connections with the people they already know in their community. With features like meetups and events, Gymlink provides a platform for both fitness lovers, who are looking to make friends and share workouts, and gym fans, who are looking to connect with other members of the communities they love.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gymlink</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Gymlink
        </a>
      </footer>
    </div>
  );
}
