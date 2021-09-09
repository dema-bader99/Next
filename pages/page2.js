import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function FirstPost() {
  return (
	<>
		<h1>Hey this is my Second Page</h1>
		<h2>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</h2>
		<div>
			<Image src="/HD wallpaper_ colorful, pink.jpeg" alt="colorful" width={200} height={200} />
		</div>
		<button className={styles.button}>
			<Link href="/api/hello">
				click meee
			</Link>
		</button>
	</>
  )
}