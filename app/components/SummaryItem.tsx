import { clsx } from "clsx";
import Image from "next/image";
import Summary from "../types/Summary";
import styles from "./SummaryItem.module.css";

export default function SummaryItem({ summary }: { summary: Summary }) {
	const { icon, category, score } = summary;
	const iconURL = `assets/images/${icon}`;
	return (
		<section
			className={clsx(
				styles.summary,
				styles[`${category.toLowerCase()}Background`]
			)}
		>
			<div className={styles.left}>
				<Image src={iconURL} alt={category} width={20} height={20} />
				<h3
					className={clsx(
						styles.category,
						styles[`${category.toLowerCase()}Text`]
					)}
				>
					{category}
				</h3>
			</div>
			<div className={styles.right}>
				<p className={styles.score}>{score}</p>
				<p className={styles.subscore}>/ 100</p>
			</div>
		</section>
	);
}
