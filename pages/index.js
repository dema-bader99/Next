import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
	<div className={styles.container}>
		<Head>
			<title>Create Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<h1>First Page</h1>
			<h1 className="title">
				Go to {' '}
				<Link href="/page2">
					<a>Second Page!</a>
				</Link>
			</h1>
		</main>
	</div>
  )
}
