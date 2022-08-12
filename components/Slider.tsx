import styles from "../styles/slider.module.css";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import { useState } from "react";

export default function Slider() {
	const [slide, setSlide] = useState(0);
	const [items, setItems] = useState(Array.from(Array(5).keys()));

	function changeSlide(direction: number) {
		let slideNumber = 0;

		if (slide + direction < 0) {
			slideNumber = items.length - 1;
		} else {
			slideNumber = (slide + direction) % items.length;
		}

		setSlide(slideNumber);
	}

	return (
		<div className={styles.container}>
			<TiArrowLeftOutline onClick={() => changeSlide(-1)} className={styles.leftArrow} />
			<div
				className={styles.slideList}
				style={{
					transform: `translateX(-${slide * 100}%)`,
				}}
			>
				{items.map((_, i) => (
					<div key={i} className={styles.slide}>
						<div className={styles.slideChild}></div>
					</div>
				))}
			</div>

			<TiArrowRightOutline onClick={() => changeSlide(1)} className={styles.rightArrow} />
		</div>
	);
}
