import type React from "react";
import styles from "../styles/button.module.css";

type layoutProps = {
	title: string;
};

export default function Button({ title }: layoutProps) {
	return (
		<button className={styles.button}>
			<p className={styles.title}>{title}</p>
		</button>
	);
}
