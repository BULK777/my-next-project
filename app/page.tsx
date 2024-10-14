import styles from "./page.module.css";
import Image from "next/image";
import mvPic from "../public/img-mv.jpg";

export default function Home() {
	return (
		<section className={styles.top}>
			<div>
				<h1 className={styles.title}>テクノロジーで世界を変える</h1>
				<p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
			</div>
			<Image
				className={styles.bgimg}
				src={mvPic}
				alt=""

				// Local Imagesを使うと以下の記述は省略できる
				// src="/img-mv.jpg"
				// width={4000}
				// height={1200}
			/>
		</section>
	);
}