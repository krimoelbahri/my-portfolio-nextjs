import styles from "../styles/layout.module.css";

const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

function Header() {
	return (
		<header>
			<nav>this is a header</nav>
		</header>
	);
}
function Footer() {
	return (
		<footer>
			<nav>this is a footer</nav>
		</footer>
	);
}
