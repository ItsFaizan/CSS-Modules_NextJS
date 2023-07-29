import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to <span className={styles.span}>NextJS</span></h1>
        <button className={styles.btn}>Hire me</button>
    </main>
  )
}
