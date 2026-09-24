import Link from "next/link";
import styles from "./Home.module.css";
import SummaryItem from "./components/SummaryItem";
import data from "./data.json";

export default function Home() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<p className={styles.resultHeader}>Your Result</p>
				<section className={styles.circle}>
					<h2 className={styles.score}>76</h2>
					<p className={styles.subscore}>of 100</p>
				</section>
				<h2 className={styles.result}>Great</h2>
				<p className={styles.resultText}>
					You scored higher than 65% of the people who have taken
					these tests.
				</p>
			</header>
			<footer className={styles.footer}>
				<h1 className={styles.summaryHeader}>Summary</h1>
				<ul className={styles.summaryList}>
					{data.map((item) => (
						<li key={item.category}>
							<SummaryItem summary={item} />
						</li>
					))}
				</ul>
				<Link href="#" className={styles.continueButton}>
					Continue
				</Link>
			</footer>
		</main>
	);
}
