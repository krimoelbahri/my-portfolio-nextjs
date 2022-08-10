import styles from "../styles/layout.module.css";
import type React from "react";
import Link from "next/link";
import logo from "../public/android-chrome-512x512.png";
import Image from "next/image";

type layoutProps = {
	children?: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;

function Header() {
	return (
		<header>
			<div className={styles.hContainer}>
				<Link href={"/"}>
					<a>
						<Image src={logo} alt='logo' width={35} height={35} />
					</a>
				</Link>
				<Link href={"/"}>
					<a className={styles.nav}>Home</a>
				</Link>
				<Link href={"/about"}>
					<a className={styles.nav}>About</a>
				</Link>
				<Link href={"/portfolio"}>
					<a className={styles.nav}>portfolio</a>
				</Link>
				<Link href={"/contact"}>
					<a className={styles.nav}>contact</a>
				</Link>
			</div>
		</header>
	);
}
