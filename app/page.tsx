import styles from "./page.module.css";
import Image from "next/image";
import mvPic from "../public/img-mv.jpg";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {

	const data = await getNewsList({
		limit: TOP_NEWS_LIMIT,
	});

	return (
		<>
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
		<section className={styles.news}>
			<h2 className={styles.newsTitle}>News</h2>
			<NewsList news={data.contents} />
			<div className={styles.newsLink}>
				<ButtonLink href="/news">もっと見る</ButtonLink>
			</div>

		</section>
		</>
	);
}