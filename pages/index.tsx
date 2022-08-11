import type { NextPage } from "next";
import Link from "next/link";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.greeting}>
				<h2>Hi, I am Karim Guezlane</h2>
				<h2>Full Stack Web Developer</h2>
			</div>
			<div className={styles.space}></div>
			<div className={styles.buttons}>
				<Link href={"/about"}>
					<a>
						<Button title='About me' />
					</a>
				</Link>

				<Link href={"/portfolio"}>
					<a>
						<Button title='See my work' />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Home;
